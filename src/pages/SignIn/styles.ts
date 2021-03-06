import styled from "styled-components/native";
import { COLORS, Typography } from "../../constants";
import { ButtonProps } from "../../models/components.model";
import { Form as Unform } from "@unform/mobile";

import { KeyboardAvoidingViewProps } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${COLORS.background};
  padding: 40px 30px;
`;

export const BackButton = styled.TouchableOpacity<ButtonProps>`
  margin-bottom: 85px;
  color: ${COLORS.text};
`;

export const Heading = styled.View`
  justify-content: flex-start;
  margin-bottom: 45px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-family: ${Typography.fontFamilyBlack};
  font-size: ${Typography.h2};
  color: ${COLORS.linear};
`;

export const Subtitle = styled.Text`
  font-size: ${Typography.h4};
  font-family: ${Typography.fontFamilyRegular};
  margin-top: 15px;
  color: ${COLORS.text};
`;

export const PasswordRecovery = styled.TouchableOpacity`
  margin-top: 25px;
  margin-bottom: 10px;
  align-items: flex-end;
`;

export const PasswordRecoveryText = styled.Text`
  color: ${COLORS.gray};
  font-size: ${Typography.h5};
  font-family: ${Typography.fontFamilyRegular};
`;

export const TogglePasswordButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 10px;
  height: 30px;
  width: 30px;
`;

export const Form = styled(Unform)`
  margin-top: 4px;
  margin-horizontal: 10px;
`;

export const ValidationTextError = styled.Text`
  color: ${COLORS.danger};
  font-size: 12px;
  margin-top: 10px;
  text-align: right;
`;

