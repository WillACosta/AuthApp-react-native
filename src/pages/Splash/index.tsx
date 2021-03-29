import React from "react";
import { View, Text } from "react-native";

import { Container, Loading } from './styles';

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <Text>Wait for a moment...</Text>
      <Loading size="large" color="#fff" />
    </Container>
  );
};

export default SplashScreen;
