import styled from "styled-components/native";
import { ButtonProps } from "../../models/components.model";
import colors from "../../theme/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  padding: 40px 30px;
`;

export const BackButton = styled.TouchableOpacity<ButtonProps>`
  margin-bottom: 85px;
`;

export const Heading = styled.View`
  justify-content: flex-start;
  margin-bottom: 45px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  margin-top: 15px;
  color: ${colors.text};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: ${colors.text};
`;
