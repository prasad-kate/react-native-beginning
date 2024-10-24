import {
  GestureResponderEvent,
  TextInputProps,
  TouchableOpacityProps,
} from "react-native";

type IoniconName =
  | "arrow-back"
  | "chevron-back"
  | "home"
  | "settings"
  | "add"
  | "remove"
  | "close"
  | "checkmark"
  | "star";

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  icon?: IoniconName;
  iconSize?: number;
  iconColor?: string;
}

export interface PasswordInputProps extends TextInputProps {
  label: string;
}
