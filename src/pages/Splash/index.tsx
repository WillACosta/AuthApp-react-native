import React from "react";
import LinearGradient from 'react-native-linear-gradient';

import { View, Text, StatusBar } from "react-native";
import { Container, CustomText } from './styles';

import PrimaryButton from "../../components/atoms/PrimaryButton";
import OutlineButton from "../../components/atoms/OutlineButton";

const SplashScreen: React.FC = () => {

  function renderHeader() {
    return (
      <>
        <View style={{ alignItems: 'flex-start', marginBottom: 35 }}>
          <Text style={{ color: "#fff", fontSize: 30, paddingBottom: 20 }}>
            Boas vindas
          </Text>
          <CustomText>À melhor maneira</CustomText>
          <CustomText>De controlar suas finanças</CustomText>
        </View>
      </>
    );
  }

  function renderButtons() {
    return (
      <>
        <View style={{ justifyContent: 'center' }}>

          <PrimaryButton>Entrar</PrimaryButton>
          <OutlineButton>Cadastrar</OutlineButton>

          <Text style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: 25, textAlign: 'center' }}>
            Termos de serviço
          </Text>
        </View>
      </>
    );
  }

  return (
    <LinearGradient colors={['#7BDE9E', '#17B7BD']} style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#7BDE9E" />
      <Container>

        {renderHeader()}
        {renderButtons()}

      </Container>
    </LinearGradient>
  );
};

export default SplashScreen;
