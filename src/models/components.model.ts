import { TextInputProps } from "react-native";

export interface PrimaryButtonProps {
  backgroundColor: string;
}
export interface PrimaryButtonTextProps {
  textColor: string;
}

export interface ThemeButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  onPressFn: () => Promise<any> | void;
}

export interface ButtonProps {
  onPress: () => Promise<any> | void;
}

export interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  type?: string;
}

export interface InputReference {
  value: string;
  focus?: () => void;
}
