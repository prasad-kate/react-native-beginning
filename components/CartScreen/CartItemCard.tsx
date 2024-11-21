import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { CartItemCardProp } from "@/types";
import { formatPrice } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartItemCard = ({ name, image, price }: CartItemCardProp) => {
  return (
    <View style={cartScreenStyles.cartItemContainer}>
      <Image source={image} style={cartScreenStyles.cartItemImage} />
      <View style={cartScreenStyles.cartItemDetailsContainer}>
        <View>
          <Text style={cartScreenStyles.cartItemTitle}>{name}</Text>
          <Text style={cartScreenStyles.cartItemPrice}>
            {formatPrice(+price)}
          </Text>
        </View>
        <View style={cartScreenStyles.cartItemCountContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={cartScreenStyles.cartNumberAddRemoveButton}
          >
            <Ionicons name="remove" size={18} color="#808080" />
          </TouchableOpacity>
          <Text style={cartScreenStyles.cartItemNumber}>{"1"}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={cartScreenStyles.cartNumberAddRemoveButton}
          >
            <Ionicons name="add" size={18} color="#808080" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={cartScreenStyles.cancelButtonContainer}
      >
        <Ionicons name="close" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItemCard;
