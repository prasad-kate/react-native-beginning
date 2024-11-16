import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { BackButtonHeaderProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Text, View } from "react-native";

const BackButtonHeader = ({
  title,
  backNavigationPath,
}: BackButtonHeaderProps) => {
  const router = useRouter();

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
