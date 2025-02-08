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

export interface ProductCategories {
  category_id: number;
  name: string;
  image: ImageSourcePropType;
}

export interface HomeScreenCategorySectionProps {
  productCategories: ProductCategories[];
  isGettingCategories: boolean;
}

export interface ProductDetails {
  id: number;
  name: string;
  image: ImageSourcePropType;
  price?: number;
}

export interface HomeScreenProductCardProps extends ProductDetails {
  isSingleItem?: boolean;
  readonly?: boolean;
  quantity?: number;
}

export interface HomeScreenProductSectionProps {
  filteredProducts: ProductDetails[];
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

export type OrderStatus = "pending" | "delivered" | "cancelled";

export interface OrderDetailsCardProps {
  order_id: string;
  orderDate: string;
  orderStatus: OrderStatus;
  quantity: string;
  total: string;
  handleShowOrderDetails: (order_id: number) => void;
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

export interface Address {
  address_id: number;
  address: string;
  city: string;
  country: string;
  state: string;
  pincode: string;
  isActive: boolean;
}

export interface ShippingAddressCardProps {
  index: number;
  addressDetails: Address;
  selectedAddress: number | null;
  setSelectedAddress: Dispatch<React.SetStateAction<number | null>>;
}

export interface ShippingAddressCheckboxProps {
  setSelectedAddress: Dispatch<React.SetStateAction<number | null>>;
  selectedAddress: number | null;
  addressId: number;
  index: number;
}

export interface GlobalCheckboxProps extends CheckboxProps {
  label?: string;
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
  imgUrl: ImageSourcePropType;
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

export interface OrderItem {
  product_id: number;
  quantity: number;
  price: number;
}

export interface OrderPayload {
  total: number;
  user_id: number;
  items: OrderItem[];
}

export interface NotificationsDetails {
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface SingleOrderItem {
  order_item_id: number;
  product_name: string;
  image: ImageSourcePropType;
  quantity: number;
}

export interface SingleOrderDetailsProps {
  orderDetails: SingleOrderItem[];
  isGettingOrderDetails: boolean;
}

export interface CreateAddressPayload {
  address: string;
  pincode: string;
  country: string;
  city: string;
  district: string;
}

export interface UpdateAddressStatusPayload {
  userId: number;
  addressId: number;
}
