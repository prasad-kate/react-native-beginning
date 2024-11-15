import AddShippingDetailsHeader from "@/components/DetailsScreens/shippingDetails/AddShippingDetailsHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { View } from "react-native";

const AddShippingDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <AddShippingDetailsHeader />
    </View>
  );
};

export default AddShippingDetails;
