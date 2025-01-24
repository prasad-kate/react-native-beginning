import OrderItem from "@/components/HomeScreen/HomeScreenProductCard";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { SingleOrderDetailsProps } from "@/types";
import { ActivityIndicator, FlatList, View } from "react-native";

const SingleOrderDetails = ({
  isGettingOrderDetails,
  orderDetails,
}: SingleOrderDetailsProps) => {
  return (
    <View>
      {isGettingOrderDetails ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={orderDetails}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => {
            const isSingleItem =
              index % 2 === 0 && index === orderDetails?.length - 1;
            return (
              <OrderItem
                id={item.order_item_id}
                name={item.product_name}
                image={item.image}
                quantity={item.quantity}
                isSingleItem={isSingleItem}
                readonly
              />
            );
          }}
          columnWrapperStyle={homeScreenStyles.productsContainer}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default SingleOrderDetails;
