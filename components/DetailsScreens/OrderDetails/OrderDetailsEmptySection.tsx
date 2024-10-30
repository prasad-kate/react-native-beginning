import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { Image, Text, View } from "react-native";

const OrderDetailsEmptySection = () => {
  return (
    <View style={detailsScreenStyles.emptyOrderDetailsContainer}>
      <Image
        source={require("@/assets/images/not-found-img.jpg")}
        style={detailsScreenStyles.notFoundImage}
      />
    </View>
  );
};

export default OrderDetailsEmptySection;
