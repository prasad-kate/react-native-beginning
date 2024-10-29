import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const OrderDetailsHeader = () => {
  return (
    <View style={detailsScreenStyles.headerContainer}>
      <Text style={detailsScreenStyles.headerText}>My Orders</Text>
      <Ionicons
        name="chevron-back"
        size={24}
        color="gray"
        style={detailsScreenStyles.backIcon}
      />
    </View>
  );
};

export default OrderDetailsHeader;
