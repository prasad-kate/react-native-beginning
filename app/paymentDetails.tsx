import BackButtonHeader from "@/components/BackButtonHeader";
import PaymentMethods from "@/components/DetailsScreens/PaymentDetails/PaymentMethods";
import PlusIconButton from "@/components/PlusIconButton";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { useRouter } from "expo-router";
import { View } from "react-native";

const PaymentDetails = () => {
  const router = useRouter();

  return (
    <View style={detailsScreenStyles.container}>
      <View>
        <BackButtonHeader title="Payment Method" />
        <PaymentMethods />
      </View>
      <View style={detailsScreenStyles.plusIconButtonContainer}>
        <PlusIconButton
          onPress={() => {
            router.push("/addPaymentDetails");
          }}
        />
      </View>
    </View>
  );
};

export default PaymentDetails;
