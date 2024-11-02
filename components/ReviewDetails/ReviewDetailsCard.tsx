import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { ReviewDetailsCardProps } from "@/types";
import { formatPrice } from "@/utils";
import React from "react";
import { Image, Text, View } from "react-native";
import { Rating } from "react-native-ratings";

const ReviewDetailsCard = ({
  name,
  date,
  image,
  numberOfStars,
  price,
  review,
}: ReviewDetailsCardProps) => {
  return (
    <View style={detailsScreenStyles.reviewDetailsCard}>
      <View
        style={detailsScreenStyles.reviewDetailsImageAndProductNameContainer}
      >
        <Image source={image} style={detailsScreenStyles.reviewImage} />
        <View>
          <Text style={detailsScreenStyles.reviewDetailsProductName}>
            {name}
          </Text>
          <Text style={detailsScreenStyles.reviewDetailsProductPrice}>
            {formatPrice(+price)}
          </Text>
        </View>
      </View>
      <View style={detailsScreenStyles.reviewDetailsRatingAndDateContainer}>
        <Rating
          startingValue={numberOfStars}
          imageSize={15}
          ratingColor="#F2C94C"
          readonly
        />
        <Text style={detailsScreenStyles.reviewDetailsProductDate}>{date}</Text>
      </View>
      <Text style={detailsScreenStyles.reviewDetailsReview}>{review}</Text>
    </View>
  );
};

export default ReviewDetailsCard;
