import React, { useContext, useState } from "react";
import { StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  FormContainer,
  Heading,
  Subtitle,
  Title,
  BackButton,
  PasswordRecovery,
  PasswordRecoveryText,
  InputField,
  InputLabel,
  InputText,
  TogglePasswordButton
} from './styles';

import { NavigationProps } from "../../models/navigation.models";
import { COLORS } from "../../constants";

import GradientButton from '../../components/atoms/GradientButton';
import AuthContext from "../../contexts/auth";

const SignIn: React.FC<NavigationProps> = ({ navigation }) => {
  const { signed, signIn } = useContext(AuthContext);

  console.log('User logged? ->', signed);

  function handleSignIn() {
    signIn();
  }

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
    const [showPassword, setShowPassword] = useState(false);

    return (
      <FormContainer>

        <InputField>
          <InputLabel>Email</InputLabel>
          <InputText
            keyboardType="email-address"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
          />
        </InputField>

        <InputField>
          <InputLabel>Senha</InputLabel>
          <InputText
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
            secureTextEntry={!showPassword}
          />
          <TogglePasswordButton onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-with-line' : 'eye'}
              size={18}
              color={COLORS.primary}
            />
          </TogglePasswordButton>
        </InputField>

        <PasswordRecovery>
          <PasswordRecoveryText>Esqueceu sua senha?</PasswordRecoveryText>
        </PasswordRecovery>

        <GradientButton
          onPressFn={handleSignIn}
          backgroundColor={COLORS.linear}
          textColor={COLORS.white}
        >
          Entrar
        </GradientButton>

      </FormContainer>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <Container>
        {renderHeader()}
        {renderForm()}
      </Container>
    </>
  );
};

export default SignIn;
