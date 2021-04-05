import React from 'react';
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

import {
  PrimaryButtonTextProps,
  ThemeButtonProps,
} from "../../models/components.model";

import { COLORS, Typography } from '../../constants';

const ButtonField = styled.TouchableOpacity`
  margin-top: 38px;
  height: 60px;
`;

const ButtonText = styled.Text<PrimaryButtonTextProps>`
  font-size: ${Typography.h4};
  font-family: ${Typography.fontFamilyRegular};
  color: ${(props) => props.textColor};
`;

const GradientButton: React.FC<ThemeButtonProps> = ({ children, backgroundColor, textColor, onPressFn }) => {
  return (
    <ButtonField onPress={onPressFn}>
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8
        }}
        colors={[COLORS.gradientInitial, COLORS.gradientEnd]}
      >
        <ButtonText textColor={textColor}>
          {children}
        </ButtonText>
      </LinearGradient>
    </ButtonField>
  );
}

export default GradientButton;