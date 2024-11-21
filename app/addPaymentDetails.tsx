import BackButtonHeader from "@/components/BackButtonHeader";
import AddPaymentDetailsForm from "@/components/DetailsScreens/PaymentDetails/AddPaymentDetailsForm";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { ImageBackground, View } from "react-native";

const addPaymentDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="Add Payment Method" />
      <ImageBackground
        source={require("@/assets/images/payment-method-blank-card.png")}
        resizeMode="cover"
        style={detailsScreenStyles.paymentMethodCardContainer}
        imageStyle={detailsScreenStyles.paymentMethodCardImage}
      />
      <AddPaymentDetailsForm />
    </View>
  );
};

export default addPaymentDetails;
