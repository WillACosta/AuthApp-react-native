import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StatusBar } from "react-native";

import { Container, CustomText } from './styles';
import { COLORS, FONTS } from '../../constants/theme';
import { NavigationProps } from "../../models/navigation.models";

import PrimaryButton from "../../components/atoms/PrimaryButton";
import OutlineButton from "../../components/atoms/OutlineButton";

const SplashScreen: React.FC<NavigationProps> = ({ navigation }) => {

  function renderHeader() {
    return (
      <>
        <View style={{ alignItems: 'flex-start', marginBottom: 35 }}>
          <Text style={{ color: COLORS.white, paddingBottom: 20, ...FONTS.h1 }}>
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

          <PrimaryButton
            backgroundColor={COLORS.white}
            textColor={COLORS.gradientEnd}
            onPressFn={() => navigation.navigate('SignIn')}>
            Entrar
          </PrimaryButton>

          <OutlineButton>Cadastrar</OutlineButton>

          <Text style={{ color: COLORS.lightWhite, marginTop: 30, textAlign: 'center' }}>
            Termos de serviço
          </Text>

        </View>
      </>
    );
  }

  return (
    <LinearGradient
      colors={[COLORS.gradientInitial, COLORS.gradientEnd]}
      style={{ flex: 1 }}>

      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.gradientInitial}
      />

      <Container>
        {renderHeader()}
        {renderButtons()}
      </Container>

    </LinearGradient>
  );
};

export default SplashScreen;
