import BackButtonHeader from "@/components/BackButtonHeader";
import AddShippingDetailsForm from "@/components/DetailsScreens/shippingDetails/AddShippingDetailsForm";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const AddShippingDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="Add Shipping Address" />
      <AddShippingDetailsForm />
    </View>
  );
};

export default AddShippingDetails;
