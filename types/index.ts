import { CheckboxProps } from "expo-checkbox";
import { Dispatch } from "react";
import {
  GestureResponderEvent,
  ImageSourcePropType,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
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
  isSingleItem?: boolean;
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

export interface OrderDetailsCardProps {
  orderNo: string;
  orderDate: string;
  orderStatus: "delivered" | "cancelled" | "processing";
  quantity: string;
  total: string;
}

export interface PaymentMethodCardProps {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cardType: "visa" | "mastercard";
  isSelectedCard?: boolean;
}

export interface PaymentCardSelectionCheckboxProps {
  setSelectedCard: Dispatch<React.SetStateAction<string | null>>;
  selectedCard: string | null;
  cardNumber: string;
}

export interface ShippingAddressCardProps {
  name: string;
  address: string;
}

export interface ShippingAddressCheckboxProps {
  setSelectedAddress: Dispatch<React.SetStateAction<string | null>>;
  selectedAddress: string | null;
  addressId: string;
}

export interface GlobalCheckboxProps extends CheckboxProps {
  label: string;
  labelStyle?: TextStyle;
  checkboxContainerStyles?: ViewStyle;
  value: boolean;
  onPress?: () => void;
  onLabelPress: () => void; // to maintain or ignore same functionality when lable pressed
}
