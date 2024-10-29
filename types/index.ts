import {
  GestureResponderEvent,
  ImageSourcePropType,
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

export interface GlobalTextInputProps extends TextInputProps {
  label?: string;
}

export interface HomeScreenProductCardProps {
  name: string;
  image: ImageSourcePropType;
  price: string;
  isSingleItem: boolean;
}

export interface FavouriteScreenProductCardProps
  extends HomeScreenProductCardProps {}

export interface ProfileOptionCardProps {
  name: string;
  description: string;
  navigationPath: string;
}

export interface NotificationsCardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
}
