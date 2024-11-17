import BackButtonHeader from "@/components/BackButtonHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const addPaymentDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="Add Payment Method" />
    </View>
  );
};

export default addPaymentDetails;
