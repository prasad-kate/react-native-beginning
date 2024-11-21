import SingleProductImageSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductImageSection";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { View } from "react-native";

const singleProductScreen = () => {
  return (
    <View style={singleProductScreenStyles.container}>
      <SingleProductImageSection />
    </View>
  );
};

export default singleProductScreen;
