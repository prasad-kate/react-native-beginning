import ReviewDetailsHeader from "@/components/ReviewDetails/ReviewDetailsHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const ReviewDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <ReviewDetailsHeader />
    </View>
  );
};

export default ReviewDetails;
