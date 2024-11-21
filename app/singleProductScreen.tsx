import SingleProductDetailsSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductDetailsSection";
import SingleProductImageSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductImageSection";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { View } from "react-native";

const singleProductScreen = () => {
  return (
    <View style={singleProductScreenStyles.container}>
      <SingleProductImageSection />
      <SingleProductDetailsSection />
    </View>
  );
};

export default singleProductScreen;
