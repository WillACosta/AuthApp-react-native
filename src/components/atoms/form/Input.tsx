import React, { useRef, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { useField } from '@unform/core';

import {
  InputField,
  InputLabel,
  InputText,
  TogglePasswordButton,
  ValidationTextError
} from './styles';

import Icon from 'react-native-vector-icons/Entypo';

import { COLORS } from '../../../constants';
import { InputProps, InputReference } from '../../../models/components.model';

const Input: React.FC<InputProps> = ({ name, label, type, ...rest }) => {
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  const [showPassword, setShowPassword] = useState(false);

  const inputElementRef = useRef<TextInput>(null);

  const inputValueRef = useRef<InputReference>({
    value: defaultValue,
    focus: () => {
      if (inputElementRef.current)
        inputElementRef.current.focus();
    }
  });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      setValue(ref: InputReference, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
      getValue(ref: InputReference) {
        return ref.value;
      }
    });
  }, [fieldName, registerField, inputElementRef]);

  return (
    <>
      <InputField>
        {label && <InputLabel>{label}</InputLabel>}

        {
          type === 'password' ? (
            <>
              <InputText
                placeholderTextColor={COLORS.gray}
                selectionColor={COLORS.gray}
                ref={inputElementRef}
                defaultValue={defaultValue}
                onChangeText={value => {
                  inputValueRef.current.value = value;
                }}
                secureTextEntry={!showPassword}
                {...rest}
              />

              <TogglePasswordButton onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye-with-line' : 'eye'}
                  size={18}
                  color={COLORS.primary}
                />
              </TogglePasswordButton>
            </>
          ) : (
            <InputText
              placeholderTextColor={COLORS.gray}
              selectionColor={COLORS.gray}
              ref={inputElementRef}
              defaultValue={defaultValue}
              onChangeText={value => {
                inputValueRef.current.value = value;
              }}
              {...rest}
            />
          )
        }

        {error && <ValidationTextError>{error}</ValidationTextError>}

      </InputField>
    </>
  );
}

export default Input;