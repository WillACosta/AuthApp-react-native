import styled from "styled-components/native";
import { COLORS, Typography } from "../../../constants";

export const InputField = styled.View`
  margin-top: 20px;
`;

export const InputLabel = styled.Text`
  color: ${COLORS.gray};
  font-family: ${Typography.fontFamilyRegular};
`;

export const InputText = styled.TextInput`
  margin-vertical: 3px;
  border-bottom-color: ${COLORS.gray};
  color: ${COLORS.text};
  border-bottom-width: 1px;
  height: 40px;
  font-family: ${Typography.fontFamilyRegular};
`;

export const TogglePasswordButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 0;
  height: 30px;
  width: 30px;
`;

export const ValidationTextError = styled.Text`
  color: ${COLORS.danger};
  top: 10px;
  font-size: 12px;
  text-align: right;
`;
