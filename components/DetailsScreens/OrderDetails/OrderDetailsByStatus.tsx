import { useGetOrders } from "@/services/orders.service";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { OrderStatus } from "@/types";
import { ActivityIndicator, FlatList, View } from "react-native";
import OrderDetailsCard from "./OrderDetailsCard";
import OrderDetailsEmptySection from "./OrderDetailsEmptySection";

const OrderDetailsByStatus = ({
  orderStatus,
}: {
  orderStatus: OrderStatus;
}) => {
  const { orders: deliveredOrders, isGettingOrders } = useGetOrders({
    order_status: orderStatus,
  });

  return (
    <View style={detailsScreenStyles.tabDetailsContainer}>
      {deliveredOrders?.length ? (
        <FlatList
          data={deliveredOrders}
          keyExtractor={({ order_id }) => order_id}
          renderItem={({ item }) => {
            const { order_id, total, createdAt, order_status, orderItems } =
              item;
            return (
              <OrderDetailsCard
                order_id={order_id}
                total={total}
                orderDate={createdAt}
                orderStatus={order_status}
                quantity={orderItems?.length}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : isGettingOrders ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <OrderDetailsEmptySection />
      )}
    </View>
  );
};

export default OrderDetailsByStatus;
