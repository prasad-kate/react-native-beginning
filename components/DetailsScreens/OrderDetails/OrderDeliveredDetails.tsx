import { deliveredOrdersDetails } from "@/constants/orderDetailsConstants";
import React from "react";
import { FlatList, View } from "react-native";
import OrderDetailsCard from "./OrderDetailsCard";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";

const OrderDeliveredDetails = () => {
  return (
    <View style={detailsScreenStyles.tabDetailsContainer}>
      <FlatList
        data={deliveredOrdersDetails}
        keyExtractor={({ orderNo }) => orderNo}
        renderItem={({ item }) => {
          return <OrderDetailsCard {...item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OrderDeliveredDetails;
