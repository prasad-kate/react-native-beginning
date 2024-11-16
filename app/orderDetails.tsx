import BackButtonHeader from "@/components/BackButtonHeader";
import OrderDetailsTabSection from "@/components/DetailsScreens/OrderDetails/OrderDetailsTabSection";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const OrderDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="My Orders" backNavigationPath="/tabs/profile" />
      <OrderDetailsTabSection />
    </View>
  );
};

export default OrderDetails;
