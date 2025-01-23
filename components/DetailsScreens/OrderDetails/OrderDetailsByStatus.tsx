import BottomSheet from "@/components/BottomSheet";
import {
  useGetOrderDetailsFromOrderId,
  useGetOrders,
} from "@/services/orders.service";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { OrderStatus } from "@/types";
import { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import OrderDetailsCard from "./OrderDetailsCard";
import OrderDetailsEmptySection from "./OrderDetailsEmptySection";
import SingleOrderDetails from "./SingleOrderDetails";

const OrderDetailsByStatus = ({
  orderStatus,
}: {
  orderStatus: OrderStatus;
}) => {
  const { orders: deliveredOrders, isGettingOrders } = useGetOrders({
    order_status: orderStatus,
  });

  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);
  const [selectedOrderIdForDetails, setSelectedOrderIdForDetails] = useState<
    number | null
  >(null);

  const { orderDetails, isGettingOrderDetails } = useGetOrderDetailsFromOrderId(
    {
      order_id: selectedOrderIdForDetails,
    }
  );

  const handleShowOrderDetails = (order_id: number) => {
    setShowOrderDetails(true);
    setSelectedOrderIdForDetails(order_id);
  };

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
                handleShowOrderDetails={handleShowOrderDetails}
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
      <BottomSheet
        isVisible={showOrderDetails}
        onClose={() => setShowOrderDetails(false)}
      >
        <SingleOrderDetails
          isGettingOrderDetails={isGettingOrderDetails}
          orderDetails={orderDetails}
        />
      </BottomSheet>
    </View>
  );
};

export default OrderDetailsByStatus;
