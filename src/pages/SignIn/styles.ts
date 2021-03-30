import styled from "styled-components/native";
import colors from "../../theme/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 0 30px;
`;

export const Heading = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  height: 300px;
  width: 300px;
`;

export const Subtitle = styled.Text`
  color: ${colors.text};
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const SignInput = styled.TextInput``;

export const CustomButton = styled.TouchableOpacity`
  height: 50px;
  background: ${colors.primary};
  color: ${colors.background};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  color: ${colors.background};
  font-size: 18px;
`;

export const SignMessageButton = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.text};
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: ${colors.text};
  font-weight: 700;
  margin-left: 5px;
`;
