import Button from "@/components/ui/Button";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { SingleProductAddOrSaveSectionProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { TouchableOpacity, View } from "react-native";

const SingleProductAddOrSaveSection = ({
  productCount,
}: SingleProductAddOrSaveSectionProps) => {
  const { id } = useLocalSearchParams();
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
        onPress={() => {
          // TODO: use productCount and productId from url to add to cart
          console.log("zz", productCount, id);
        }}
      />
    </View>
  );
};

export default SingleProductAddOrSaveSection;
