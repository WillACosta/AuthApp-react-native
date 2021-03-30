import styled from "styled-components/native";

import colors from "../../theme/colors";

interface CustomButtonProps {
  backgroundColor: string;
}

interface CustomButtonTextProps {
  textColor: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 40px 30px;
`;

export const CustomText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const CustomButton = styled.TouchableOpacity<CustomButtonProps>`
  background: ${(props) => props.backgroundColor};
  margin-top: 38px;
  height: 60px;

  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OutlineButton = styled.TouchableOpacity`
  background: transparent;
  margin-top: 20px;
  height: 60px;
  border: 1px solid ${colors.background};

  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const CustomButtonText = styled.Text<CustomButtonTextProps>`
  font-size: 18px;
  color: ${(props) => props.textColor};
`;
