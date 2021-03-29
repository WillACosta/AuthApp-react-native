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
  const { signed, signIn } = useContext(AuthContext); // Extrair as informações do contexto

  console.log('User logged? ->', signed);

  function handleSignIn() {
    signIn();
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#363E43" />
      <Container>
        <Heading>
          <Logo>Cryfin</Logo>
          <Subtitle>Find your money</Subtitle>
        </Heading>

        <InputArea>
          <Input placeholder="Digite seu nome de usuário"/>
          {/* icon={} */}
          <Input placeholder="Digite sua senha" />

          <CustomButton>
            <CustomButtonText>Entrar</CustomButtonText>
          </CustomButton>

        </InputArea>

        <SignMessageButton>
          <SignMessageButtonText>Não possui uma conta?</SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
      </Container>
    </>

    // <View style={styles.container}>
    //   <Button title="Entrar" onPress={handleSignIn} />
    // </View>
  );
};

export default SignIn;
