import SingleProductAddOrSaveSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductAddOrSaveSection";
import SingleProductDetailsSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductDetailsSection";
import SingleProductImageSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductImageSection";
import { useGetProductFromProductId } from "@/services/products.service";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

const singleProductScreen = () => {
  const { id } = useLocalSearchParams();

  const [productCount, setProductCount] = useState<number>(1);

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
        <SingleProductDetailsSection
          productCount={productCount}
          setProductCount={setProductCount}
        />
      </View>
      <SingleProductAddOrSaveSection productCount={productCount} />
    </ScrollView>
  );
};

export default singleProductScreen;
