import React, { useContext } from "react";

import Icon from 'react-native-vector-icons/AntDesign';
import AuthContext from "../../contexts/auth";

import {
  Container,
  HeaderContainer,
  HeaderText,
  ExitButton
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
        <HeaderContainer>
          <HeaderText>Olá! {user?.name}</HeaderText>
          <ExitButton onPress={handleSignOut}>
            <Icon name='logout' size={30} color={COLORS.text} />
          </ExitButton>
        </HeaderContainer>
      </>
    );
  }

  return (
    <Container>
      {renderHeader()}
    </Container>
  );
};

export default Dashboard;
