import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { BackButtonHeaderProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Href, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { BackHandler, Text, View } from "react-native";

const BackButtonHeader = ({
  title,
  backNavigationPath,
}: BackButtonHeaderProps) => {
  const router = useRouter();

  const { preventBackNavigation } = useLocalSearchParams();

  // to prevent navigation back to success page after redirection
  useEffect(() => {
    if (preventBackNavigation === "true") {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          router.push(backNavigationPath as Href);
          return true;
        }
      );

      return () => backHandler.remove();
    }
  }, []);

  return (
    <View style={detailsScreenStyles.shippingDetailsHeaderContainer}>
      <Text style={detailsScreenStyles.headerText}>{title}</Text>
      <Ionicons
        name="chevron-back"
        size={24}
        color="gray"
        style={detailsScreenStyles.backIcon}
        onPress={() => {
          if (backNavigationPath) {
            return router.push(backNavigationPath as Href);
          }
          router.back();
        }}
      />
    </View>
  );
};

export default BackButtonHeader;
