import React, { InputHTMLAttributes } from 'react';
import styled from "styled-components/native";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const InputArea = styled.View`
  height: 100%;
  height: 60px;
  color: #ededed;
  background: #83d6e3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const InputField = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #268596;
  margin-left: 10px;
`;

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <InputArea>
      {/* Icon */}
      <InputField placeholder={placeholder} />
    </InputArea>
  );
}

export default Input;