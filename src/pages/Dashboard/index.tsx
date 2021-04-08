import React, { useContext, useState } from "react";
import { StatusBar, FlatList } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from "../../contexts/auth";

import LinearGradient from 'react-native-linear-gradient';

import {
  Container,
  HeaderContainer,
  HeaderText,
  ExitButton,
  HeaderContent,
  HeaderSubtext
} from './styles';

import { COLORS } from "../../constants";

const Dashboard: React.FC = () => {
  const { signOut, user } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  function renderHeader() {
    return (
      <>
        {/* <LinearGradient
          colors={[COLORS.gradientInitial, COLORS.gradientEnd]}
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 40
          }}>

          <HeaderText>Minha Carteira</HeaderText>
          <ExitButton onPress={handleSignOut}>
            <Icon name='notifications' size={30} color={COLORS.white} />
          </ExitButton>

        </LinearGradient> */}

        <HeaderContainer>
          <HeaderContent>
            <HeaderText>Olá! {user?.name}</HeaderText>
            {/* <HeaderSubtext>{user?.name}</HeaderSubtext> */}
          </HeaderContent>

          <ExitButton onPress={handleSignOut}>
            <Icon name='ios-exit' size={30} color={COLORS.text} />
            {/* <HeaderSubtext>Sair</HeaderSubtext> */}
          </ExitButton>
        </HeaderContainer>

      </>
    );
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <Container>
        {renderHeader()}
      </Container>
    </>
  );
};

export default Dashboard;
