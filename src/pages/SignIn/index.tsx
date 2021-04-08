import React, { useCallback, useContext, useRef } from "react";
import { StatusBar, ScrollView } from "react-native";
import { FormHandles } from "@unform/core";

import { LoginData } from "../../models/pages.model";
import { NavigationProps } from "../../models/navigation.models";
import { COLORS } from "../../constants";

import GradientButton from '../../components/atoms/GradientButton';
import AuthContext from "../../contexts/auth";
import Input from "../../components/atoms/form/Input";
import AvoidingView from '../../components/atoms/AvoidingView';

import IonIcons from 'react-native-vector-icons/Ionicons';
import * as Yup from 'yup';

import {
  Heading,
  Subtitle,
  Title,
  BackButton,
  PasswordRecovery,
  PasswordRecoveryText,
  Form,
  ValidationTextError
} from './styles';

const SignIn: React.FC<NavigationProps> = ({ navigation }) => {
  const { wrongCredentials, signIn } = useContext(AuthContext);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: LoginData, { reset }: { reset: () => void }) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Por favor digite um e-mail válido'),
        password: Yup.string().required('Senha é obrigatória')
      });

      await schema.validate(data, {
        abortEarly: false
      });

      signIn(data);
      formRef.current?.setErrors({});
      reset();

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  }, []);

  function renderHeader() {
    return (
      <>
        <BackButton onPress={() => navigation.navigate('Splash')}>
          <IonIcons name='arrow-back' size={30} color={COLORS.text} />
        </BackButton>

        <Heading>
          <Title>Olá</Title>
          <Subtitle>Faça login para continuar</Subtitle>
        </Heading>
      </>
    );
  }

  function renderForm() {

    return (
      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input
          name="email"
          label="E-mail"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address" />

        <Input
          name="password"
          label="Senha"
          type="password" />

        {/* { wrongCredentials &&
          <ValidationTextError>Email ou senha incorretos</ValidationTextError>
        } */}

        <PasswordRecovery>
          <PasswordRecoveryText>Esqueceu sua senha?</PasswordRecoveryText>
        </PasswordRecovery>

        <GradientButton
          onPressFn={() => { formRef.current?.submitForm(); }}
          backgroundColor={COLORS.linear}
          textColor={COLORS.white}>
          Entrar
        </GradientButton>

      </Form>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <AvoidingView>
        <ScrollView>
          {renderHeader()}
          {renderForm()}
        </ScrollView>
      </AvoidingView>
    </>
  );
};

export default SignIn;
