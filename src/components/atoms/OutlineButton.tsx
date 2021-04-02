import React from 'react';
import styled from "styled-components/native";
import { COLORS, Typography } from '../../constants';

const ButtonField = styled.TouchableOpacity`
  background: transparent;
  margin-top: 20px;
  height: 60px;
  border: 1px solid ${COLORS.white};

  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  font-size: ${Typography.h4};
  font-family: ${Typography.fontFamilyRegular}
  color: ${COLORS.white};
`;

const OutlineButton: React.FC = ({ children }) => {
  return (
    <ButtonField>
      <ButtonText>{children}</ButtonText>
    </ButtonField>
  );
}

export default OutlineButton;