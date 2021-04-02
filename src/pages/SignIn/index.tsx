import React, { useContext, useState } from "react";
import { StatusBar, TextInput, View, Text, TouchableOpacity } from "react-native";
import { NavigationProps } from "../../models/navigation.models";

import {
  Container,
  Heading,
  Subtitle,
  Title,
  BackButton
} from './styles';

import Icon from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';

import AuthContext from "../../contexts/auth";
import colors from "../../theme/colors";
import PrimaryButton from '../../components/atoms/PrimaryButton';

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
          <IonIcons name='arrow-back' size={30} color={colors.gray} />
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
      <View style={{ marginTop: 10, marginHorizontal: 4 }}>

        <View style={{ marginTop: 5 }}>
          <Text style={{ color: colors.gray }}>Email</Text>

          <TextInput
            style={{
              marginVertical: 3,
              borderBottomColor: colors.primary,
              borderBottomWidth: 1,
              height: 40
            }}
            placeholder="Digite seu email"
            placeholderTextColor={colors.gray}
            selectionColor={colors.gray}>
          </TextInput>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ color: colors.gray }}>Senha</Text>
          <TextInput
            style={{
              marginVertical: 3,
              borderBottomColor: colors.primary,
              borderBottomWidth: 1,
              height: 40
            }}
            placeholder="Digite sua senha"
            placeholderTextColor={colors.gray}
            selectionColor={colors.gray}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            style={{ position: 'absolute', right: 0, bottom: 10, height: 30, width: 30 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? 'eye-with-line' : 'eye'}
              size={18}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>

        <PrimaryButton
          onPressFn={handleSignIn}
          backgroundColor={colors.primary}
          textColor={colors.background}
        >
          Entrar
        </PrimaryButton>

      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <Container>
        {renderHeader()}
        {renderForm()}
      </Container>
    </>
  );
};

export default SignIn;
