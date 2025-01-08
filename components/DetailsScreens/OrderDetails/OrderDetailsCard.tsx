import Button from "@/components/ui/Button";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { OrderDetailsCardProps } from "@/types";
import { formatDate, formatPrice } from "@/utils";
import { Text, View } from "react-native";

const OrderDetailsCard = ({
  order_id,
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
            {/* TODO: temporary use of ID. Later, will use unique order no. */}
            {order_id}
          </Text>
        </Text>
        <Text style={detailsScreenStyles.orderDate}>
          {formatDate(orderDate)}
        </Text>
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
