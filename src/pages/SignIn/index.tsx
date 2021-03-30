import React, { useContext } from "react";
import { StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Heading,
  Logo,
  Subtitle,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import AuthContext from "../../contexts/auth";
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);

  console.log('User logged? ->', signed);

  function handleSignIn() {
    signIn();
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7BDE9E" />
      <Container>
        <Heading>
          {/* <Logo source={logo} /> */}
          <Subtitle>Find yourself</Subtitle>
        </Heading>

        <InputArea>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />

          <CustomButton onPress={handleSignIn}>
            <CustomButtonText>Entrar</CustomButtonText>
          </CustomButton>

        </InputArea>

        <SignMessageButton>
          <SignMessageButtonText>Não possui uma conta?</SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
      </Container>
    </>
  );
};

export default SignIn;
