import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { Image, View } from "react-native";

const EmptyCartScreen = () => {
  return (
    <View style={cartScreenStyles.emptyCartContainer}>
      <Image
        source={require("@/assets/images/empty-cart.png")}
        resizeMode="contain"
        style={cartScreenStyles.emptyCartImage}
      />
    </View>
  );
};

export default EmptyCartScreen;
