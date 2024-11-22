import Button from "@/components/ui/Button";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

const SingleProductAddOrSaveSection = () => {
  return (
    <View style={singleProductScreenStyles.addToCartOrFavouritesContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={singleProductScreenStyles.addToFavouritesButtonContainer}
      >
        <Ionicons size={24} name="bookmark" />
      </TouchableOpacity>
      <Button
        text="Add To Cart"
        style={singleProductScreenStyles.addToCartButton}
      />
    </View>
  );
};

export default SingleProductAddOrSaveSection;
