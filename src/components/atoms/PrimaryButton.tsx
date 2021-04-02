import React from 'react';
import styled from "styled-components/native";

import {
  PrimaryButtonProps,
  PrimaryButtonTextProps,
  ThemeButtonProps,
} from "../../models/components.model";

import { Typography } from '../../constants';

const ButtonField = styled.TouchableOpacity<PrimaryButtonProps>`
  background: ${(props) => props.backgroundColor};
  margin-top: 38px;
  height: 60px;

  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const ButtonText = styled.Text<PrimaryButtonTextProps>`
  font-size: ${Typography.h4};
  font-family: ${Typography.fontFamilyRegular};
  color: ${(props) => props.textColor};
`;

const PrimaryButton: React.FC<ThemeButtonProps> = ({ children, backgroundColor, textColor, onPressFn }) => {
  return (
    <ButtonField backgroundColor={backgroundColor} onPress={onPressFn}>
      <ButtonText textColor={textColor}>{children}</ButtonText>
    </ButtonField>
  );
}

export default PrimaryButton;