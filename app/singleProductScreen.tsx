import SingleProductAddOrSaveSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductAddOrSaveSection";
import SingleProductDetailsSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductDetailsSection";
import SingleProductImageSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductImageSection";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { ScrollView, View } from "react-native";

const singleProductScreen = () => {
  return (
    <ScrollView
      style={singleProductScreenStyles.container}
      contentContainerStyle={singleProductScreenStyles.containerContentStyles}
    >
      <View>
        <SingleProductImageSection />
        <SingleProductDetailsSection />
      </View>
      <SingleProductAddOrSaveSection />
    </ScrollView>
  );
};

export default singleProductScreen;
