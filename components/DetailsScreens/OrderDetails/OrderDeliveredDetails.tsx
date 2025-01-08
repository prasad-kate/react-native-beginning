import { useGetOrders } from "@/services/orders.service";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { FlatList, View } from "react-native";
import OrderDetailsCard from "./OrderDetailsCard";
import OrderDetailsEmptySection from "./OrderDetailsEmptySection";

const OrderDeliveredDetails = () => {
  const { orders: deliveredOrders } = useGetOrders({
    order_status: "delivered",
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
      ) : (
        <OrderDetailsEmptySection />
      )}
    </View>
  );
};

export default OrderDeliveredDetails;
