import React from "react";
import LinearGradient from 'react-native-linear-gradient';

import { View, Text, StatusBar } from "react-native";
import { Container, CustomText, CustomButton, CustomButtonText, OutlineButton } from './styles';

import colors from "../../theme/colors";

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
          <CustomButton backgroundColor="white">
            <CustomButtonText textColor={colors.primary}>Entrar</CustomButtonText>
          </CustomButton>

          <OutlineButton>
            <CustomButtonText textColor={colors.background}>Cadastrar</CustomButtonText>
          </OutlineButton>

          <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: 25, textAlign: 'center' }}>
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
