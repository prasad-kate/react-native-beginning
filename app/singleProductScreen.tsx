import SingleProductAddOrSaveSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductAddOrSaveSection";
import SingleProductDetailsSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductDetailsSection";
import SingleProductImageSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductImageSection";
import { useGetProductFromProductId } from "@/services/products.service";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

const singleProductScreen = () => {
  const { id } = useLocalSearchParams();

  const { productDetails } = useGetProductFromProductId({
    productId: +id,
  });

  return (
    <ScrollView
      style={singleProductScreenStyles.container}
      contentContainerStyle={singleProductScreenStyles.containerContentStyles}
    >
      <View>
        <SingleProductImageSection imgUrl={productDetails?.image} />
        <SingleProductDetailsSection />
      </View>
      <SingleProductAddOrSaveSection />
    </ScrollView>
  );
};

export default singleProductScreen;
