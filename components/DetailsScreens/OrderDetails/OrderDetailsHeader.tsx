import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { BackHandler, Text, View } from "react-native";

const OrderDetailsHeader = () => {
  const router = useRouter();
  const { preventBackNavigation } = useLocalSearchParams();

  // to prevent navigation back to success page after redirection
  useEffect(() => {
    if (preventBackNavigation === "true") {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          router.push("/tabs/profile");
          return true;
        }
      );

      return () => backHandler.remove();
    }
  }, []);

  return (
    <View style={detailsScreenStyles.headerContainer}>
      <Text style={detailsScreenStyles.headerText}>My Orders</Text>
      <Ionicons
        name="chevron-back"
        size={24}
        color="gray"
        style={detailsScreenStyles.backIcon}
        onPress={() => {
          router.push("/tabs/profile");
        }}
      />
    </View>
  );
};

export default OrderDetailsHeader;
