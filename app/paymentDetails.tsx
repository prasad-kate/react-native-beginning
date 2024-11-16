import BackButtonHeader from "@/components/BackButtonHeader";
import PaymentMethods from "@/components/DetailsScreens/PaymentDetails/PaymentMethods";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const PaymentDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="Payment Method" />
      <PaymentMethods />
    </View>
  );
};

export default PaymentDetails;
