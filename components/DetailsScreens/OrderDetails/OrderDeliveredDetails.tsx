import { deliveredOrdersDetails } from "@/constants/orderDetailsConstants";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { FlatList, View } from "react-native";
import OrderDetailsCard from "./OrderDetailsCard";
import OrderDetailsEmptySection from "./OrderDetailsEmptySection";

const OrderDeliveredDetails = () => {
  return (
    <View style={detailsScreenStyles.tabDetailsContainer}>
      {deliveredOrdersDetails?.length ? (
        <FlatList
          data={deliveredOrdersDetails}
          keyExtractor={({ orderNo }) => orderNo}
          renderItem={({ item }) => {
            return <OrderDetailsCard {...item} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <OrderDetailsEmptySection />
      )}
    </View>
  );
};

export default OrderDeliveredDetails;
