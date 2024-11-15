import AddShippingDetailsForm from "@/components/DetailsScreens/shippingDetails/AddShippingDetailsForm";
import AddShippingDetailsHeader from "@/components/DetailsScreens/shippingDetails/AddShippingDetailsHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const AddShippingDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <AddShippingDetailsHeader />
      <AddShippingDetailsForm />
    </View>
  );
};

export default AddShippingDetails;
