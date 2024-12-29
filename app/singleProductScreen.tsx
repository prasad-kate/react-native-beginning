import SingleProductAddOrSaveSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductAddOrSaveSection";
import SingleProductDetailsSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductDetailsSection";
import SingleProductImageSection from "@/components/DetailsScreens/SingleProductDetails/SingleProductImageSection";
import { useGetProductFromProductId } from "@/services/products.service";
import useCartStore from "@/store/cartStore";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

const singleProductScreen = () => {
  const { id } = useLocalSearchParams();
  const { cartItems } = useCartStore();
  const [productCount, setProductCount] = useState<number>(1);

  const { productDetails } = useGetProductFromProductId({
    productId: +id,
  });

  const isItemAddedToCart = cartItems?.some(
    (itemData) => itemData?.productId === +id
  );

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
          isItemAddedToCart={isItemAddedToCart}
        />
      </View>
      <SingleProductAddOrSaveSection
        productCount={productCount}
        productName={productDetails?.name}
        isItemAddedToCart={isItemAddedToCart}
      />
    </ScrollView>
  );
};

export default singleProductScreen;
