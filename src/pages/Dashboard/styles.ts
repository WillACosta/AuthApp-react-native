import styled from "styled-components/native";

import { COLORS, Typography } from "../../constants";

export const Container = styled.View`
  flex: 1;
  background: ${COLORS.white};
  padding: 40px 30px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: ${COLORS.text};
  font-size: ${Typography.h4};
  font-family: ${Typography.fontFamilyRegular};
`;

export const ExitButton = styled.TouchableOpacity``;
