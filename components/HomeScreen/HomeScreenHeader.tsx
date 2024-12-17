import useCartStore from "@/store/cartStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const HomeScreenHeader = () => {
  const router = useRouter();
  const { cartItems } = useCartStore();
  return (
    <View style={homeScreenStyles.headerContainer}>
      <Ionicons name="search" size={26} color="gray" />
      <View style={homeScreenStyles.headerTextContainer}>
        <Text style={homeScreenStyles.headerMakeHomeText} numberOfLines={1}>
          Make Home
        </Text>
        <Text style={homeScreenStyles.headerBeautifulText}>Beautiful</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={homeScreenStyles.cartIconContainer}
        onPress={() => {
          router.push("/cartScreen");
        }}
      >
        <Ionicons name="cart" size={26} color="gray" />
        {!!cartItems?.length && (
          <Text style={homeScreenStyles.cartItemNumber}>
            {cartItems?.length}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenHeader;
