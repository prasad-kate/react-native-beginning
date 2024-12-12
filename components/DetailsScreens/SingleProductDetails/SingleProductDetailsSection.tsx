import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { SingleProductDetailsSectionProps } from "@/types";
import { formatPrice } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Rating } from "react-native-ratings";

const SingleProductDetailsSection = ({
  productCount,
  setProductCount,
}: SingleProductDetailsSectionProps) => {
  return (
    <View style={singleProductScreenStyles.productDetailsContainer}>
      <Text style={singleProductScreenStyles.poductTitle}>Produt name</Text>
      <View style={singleProductScreenStyles.productPriceAndCountContainer}>
        <Text style={singleProductScreenStyles.productPrice}>
          {formatPrice(50)}
        </Text>

        <View style={cartScreenStyles.cartItemCountContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={cartScreenStyles.cartNumberAddRemoveButton}
            onPress={() => {
              if (productCount) {
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
        <Text style={singleProductScreenStyles.poductTitle}>{4.5}</Text>
        <Text
          style={singleProductScreenStyles.reviewsText}
        >{`(${50} reviews)`}</Text>
      </View>

      {/* product details */}
      <Text style={singleProductScreenStyles.productDetailsText}>
        Minimal Stand is made of by natural wood. The design that is very simple
        and minimal. This is truly one of the best furnitures in any family for
        now. With 3 different colors, you can easily select the best match for
        your home.
      </Text>
    </View>
  );
};

export default SingleProductDetailsSection;
