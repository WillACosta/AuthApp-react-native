import styled from "styled-components/native";

import { COLORS, Typography } from "../../constants";

export const Container = styled.View`
  padding: 30px 20px;
  flex: 1;
  background: ${COLORS.white};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: ${COLORS.text};
  font-size: ${Typography.h4};
  font-family: ${Typography.fontFamilyRegular};
`;

export const HeaderContent = styled.View``;

export const HeaderSubtext = styled.Text`
  color: ${COLORS.text};
  font-size: ${Typography.h5};
  font-family: ${Typography.fontFamilyRegular};
`;

export const ExitButton = styled.TouchableOpacity``;
