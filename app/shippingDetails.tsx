import ShippingDetailsAddressSection from "@/components/DetailsScreens/shippingDetails/ShippingDetailsAddressSection";
import ShippingDetailsHeader from "@/components/DetailsScreens/shippingDetails/ShippingDetailsHeader";
import PlusIconButton from "@/components/PlusIconButton";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { useRouter } from "expo-router";
import { View } from "react-native";

const shippingDetails = () => {
  const router = useRouter();
  return (
    <View style={detailsScreenStyles.container}>
      <ShippingDetailsHeader />
      <ShippingDetailsAddressSection />
      <View style={detailsScreenStyles.plusIconButtonContainer}>
        <PlusIconButton
          onPress={() => {
            router.push("/addShippingDetails");
          }}
        />
      </View>
    </View>
  );
};

export default shippingDetails;
