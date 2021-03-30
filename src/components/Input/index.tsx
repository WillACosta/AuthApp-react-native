import React, { InputHTMLAttributes } from 'react';
import styled from "styled-components/native";

import colors from "../../theme/colors";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const InputArea = styled.View`
  height: 100%;
  height: 50px;
  color: ${colors.text};
  background: ${colors.background};
  border-bottom-color: ${colors.primary};
  border-bottom-width: 1px;

  flex-direction: row;
  border-radius: 5px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const InputField = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${colors.text};
  margin-left: 10px;
`;

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <InputArea>
      {/* Icon */}
      <InputField placeholder={placeholder}/>
    </InputArea>
  );
}

export default Input;