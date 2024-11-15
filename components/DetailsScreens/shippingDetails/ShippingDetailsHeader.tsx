import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

const ShippingDetailsHeader = () => {
  const router = useRouter();

  return (
    <View style={detailsScreenStyles.shippingDetailsHeaderContainer}>
      <Text style={detailsScreenStyles.headerText}>Shipping Address</Text>
      <Ionicons
        name="chevron-back"
        size={24}
        color="gray"
        style={detailsScreenStyles.backIcon}
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
};

export default ShippingDetailsHeader;
