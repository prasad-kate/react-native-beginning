import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { Image, View } from "react-native";

// TODO: rename component as reused in multiple screens
const OrderDetailsEmptySection = () => {
  return (
    <View style={detailsScreenStyles.emptyOrderDetailsContainer}>
      <Image
        source={require("@/assets/images/not-found-img.jpg")}
        style={detailsScreenStyles.notFoundImage}
      />
    </View>
  );
};

export default OrderDetailsEmptySection;
