import useCartStore from "@/store/cartStore";
import { useGlobalSearchStore } from "@/store/globalSearchStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import GlobalSearch from "../GlobalSearch";

const HomeScreenHeader = () => {
  const router = useRouter();
  const { cartItems } = useCartStore();
  const { toggleGlobalSearch } = useGlobalSearchStore();
  return (
    <>
      <View style={homeScreenStyles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            toggleGlobalSearch();
          }}
        >
          <Ionicons name="search" size={26} color="gray" />
        </TouchableOpacity>
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
          <Ionicons
            name="cart"
            size={26}
            color={cartItems?.length ? "#c9c9c9" : "gray"}
          />
          {!!cartItems?.length && (
            <Text style={homeScreenStyles.cartItemNumber}>
              {cartItems?.length}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <GlobalSearch />
    </>
  );
};

export default HomeScreenHeader;
