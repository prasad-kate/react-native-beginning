import BackButtonHeader from "@/components/BackButtonHeader";
import ShippingDetailsAddressSection from "@/components/DetailsScreens/shippingDetails/ShippingDetailsAddressSection";
import PlusIconButton from "@/components/PlusIconButton";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { useRouter } from "expo-router";
import { View } from "react-native";

const shippingDetails = () => {
  const router = useRouter();
  return (
    <View style={detailsScreenStyles.container}>
      <BackButtonHeader title="Shipping Address" />
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
