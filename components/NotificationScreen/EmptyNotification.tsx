import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { Image, View } from "react-native";

const EmptyNotifications = () => {
  return (
    <View style={cartScreenStyles.emptyCartContainer}>
      <Image
        source={require("@/assets/images/empty-notifications.jpg")}
        resizeMode="contain"
        style={{
          width: "80%",
          marginBottom: 50,
        }}
      />
    </View>
  );
};

export default EmptyNotifications;
