import { CheckboxProps } from "expo-checkbox";
import { Dispatch, ReactNode } from "react";
import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
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
  buttonTextStyles?: TextStyle;
}

export interface PasswordInputProps extends TextInputProps {
  label: string;
}

export interface GlobalTextInputProps extends TextInputProps {
  name: string;
  label?: string;
  variant?: "standard" | "outlined";
  customInputStyles?: StyleProp<TextStyle>;
  customInputContainerStyles?: StyleProp<ViewStyle>;
}

export interface HomeScreenProductCardProps {
  id: number;
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

export interface ReviewDetailsCardProps {
  name: string;
  price: string;
  image: ImageSourcePropType;
  numberOfStars: number;
  date: string;
  review: string;
}

export interface SettingTitleProps {
  title: string;
}

export interface CartItemCardProp {
  productId: number;
  name: string;
  price: number;
  image: string;
}

export interface CheckoutDetailsCardProp {
  children: ReactNode;
  containerStyles?: ViewStyle;
  title?: string;
  onEdit?: () => void;
  hideEditButton?: boolean;
}

export interface DropdownOptions {
  label: string;
  value: string;
}

export interface GlobalDropdownProps {
  label: string;
  options: DropdownOptions[];
  variant?: "standard" | "outlined";
}

export interface BackButtonHeaderProps {
  title: string;
  backNavigationPath?: string;
}

export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface SingleProductImageSectionProps {
  imgUrl: string;
}

export interface SingleProductAddOrSaveSectionProps {
  productCount: number;
  productName: string;
  isItemAddedToCart: boolean;
}

export interface SingleProductDetailsSectionProps {
  productCount: number;
  isItemAddedToCart: boolean;
  setProductCount: Dispatch<React.SetStateAction<number>>;
}

export interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

export interface ProductItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  stars: number;
  category_id: number;
}

export interface CartItemsSectionProps {
  cartItemProductDetails: ProductItem[];
}

export interface CartTotalSectionProps {
  total: number;
  isAnyPending: boolean;
}
