import React from 'react';
import styled from "styled-components/native";
import colors from '../../theme/colors';

const ButtonField = styled.TouchableOpacity`
  background: transparent;
  margin-top: 20px;
  height: 60px;
  border: 1px solid ${colors.background};

  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.background};
`;

const OutlineButton: React.FC = ({ children }) => {
  return (
    <ButtonField>
      <ButtonText>{children}</ButtonText>
    </ButtonField>
  );
}

export default OutlineButton;