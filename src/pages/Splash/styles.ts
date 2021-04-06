import styled from "styled-components/native";
import { COLORS } from "../../constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 40px 30px;
`;

export const CustomText = styled.Text`
  color: ${COLORS.white};
  font-size: 18px;
`;
