import Button from "@/components/ui/Button";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { OrderDetailsCardProps } from "@/types";
import { formatPrice } from "@/utils";
import React from "react";
import { Text, View } from "react-native";

const OrderDetailsCard = ({
  orderNo,
  orderDate,
  orderStatus,
  total,
  quantity,
}: OrderDetailsCardProps) => {
  return (
    <View style={detailsScreenStyles.orderDetailsCardContainer}>
      <View style={detailsScreenStyles.orderDetailsCardHeader}>
        <Text style={detailsScreenStyles.orderDetailsKeyText}>
          Order No.:{" "}
          <Text style={detailsScreenStyles.orderDetailsValueText}>
            {orderNo}
          </Text>
        </Text>
        <Text style={detailsScreenStyles.orderDate}>{orderDate}</Text>
      </View>

      <View
        style={{
          ...detailsScreenStyles.orderDetailsCardHeader,
          ...detailsScreenStyles.orderDetailsTotalContainer,
        }}
      >
        <Text style={detailsScreenStyles.orderDetailsKeyText}>
          Quantity:{" "}
          <Text style={detailsScreenStyles.orderDetailsValueText}>
            {quantity}
          </Text>
        </Text>
        <Text style={detailsScreenStyles.orderDetailsKeyText}>
          Total Amount:{" "}
          <Text style={detailsScreenStyles.orderDetailsValueText}>
            {formatPrice(+total)}
          </Text>
        </Text>
      </View>

      <View
        style={{
          ...detailsScreenStyles.orderDetailsCardHeader,
          ...detailsScreenStyles.orderDetailsButtonContainer,
        }}
      >
        <Button text="Details" style={detailsScreenStyles.orderDetailsButton} />
        <Text style={detailsScreenStyles.orderStatus}>{orderStatus}</Text>
      </View>
    </View>
  );
};

export default OrderDetailsCard;
