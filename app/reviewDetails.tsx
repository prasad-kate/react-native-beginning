import ReviewDetailsHeader from "@/components/ReviewDetails/ReviewDetailsHeader";
import ReviewDetailsSection from "@/components/ReviewDetails/ReviewDetailsSection";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const ReviewDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <ReviewDetailsHeader />
      <ReviewDetailsSection />
    </View>
  );
};

export default ReviewDetails;
