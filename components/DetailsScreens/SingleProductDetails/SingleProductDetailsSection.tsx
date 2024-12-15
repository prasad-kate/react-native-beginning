import { useGetProductFromProductId } from "@/services/products.service";
import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { SingleProductDetailsSectionProps } from "@/types";
import { formatPrice } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Rating } from "react-native-ratings";

const SingleProductDetailsSection = ({
  productCount,
  setProductCount,
}: SingleProductDetailsSectionProps) => {
  const { id } = useLocalSearchParams();

  const { productDetails } = useGetProductFromProductId({
    productId: +id,
  });

  // TODO: make reviews dynamic based on review table

  return (
    <View style={singleProductScreenStyles.productDetailsContainer}>
      <Text style={singleProductScreenStyles.poductTitle}>
        {productDetails.name}
      </Text>
      <View style={singleProductScreenStyles.productPriceAndCountContainer}>
        <Text style={singleProductScreenStyles.productPrice}>
          {formatPrice(productDetails?.price || 0)}
        </Text>

        <View style={cartScreenStyles.cartItemCountContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={cartScreenStyles.cartNumberAddRemoveButton}
            onPress={() => {
              if (productCount > 1) {
                setProductCount((prev) => prev - 1);
              }
            }}
          >
            <Ionicons name="remove" size={18} color="#808080" />
          </TouchableOpacity>
          <Text style={cartScreenStyles.cartItemNumber}>{productCount}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={cartScreenStyles.cartNumberAddRemoveButton}
            onPress={() => {
              setProductCount((prev) => prev + 1);
            }}
          >
            <Ionicons name="add" size={18} color="#808080" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ratings part */}
      <View style={singleProductScreenStyles.productRatingContainer}>
        <Rating
          startingValue={1}
          ratingCount={1}
          imageSize={20}
          ratingColor="#fff"
          ratingBackgroundColor="#F2C94C"
          readonly
        />
        <Text style={singleProductScreenStyles.poductTitle}>
          {productDetails?.stars || 0}
        </Text>
        <Text
          style={singleProductScreenStyles.reviewsText}
        >{`(${10} reviews)`}</Text>
      </View>

      {/* product details */}
      <Text style={singleProductScreenStyles.productDetailsText}>
        {productDetails?.description}
      </Text>
    </View>
  );
};

export default SingleProductDetailsSection;
