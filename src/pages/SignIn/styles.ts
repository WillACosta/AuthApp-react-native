import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 0 30px;
  background: #363e43;
`;

export const LoginButton = styled.Button`
  padding-top: 10px;
`;

export const Heading = styled.View`
  text-align: center;
`;

export const Logo = styled.Text`
  font-size: 28px;
  color: #ededed;
`;

export const Subtitle = styled.Text`
  color: #ededed;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const SignInput = styled.TextInput``;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  color: #fff;
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
  color: #ededed;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #ededed;
  font-weight: 700;
  margin-left: 5px;
`;
