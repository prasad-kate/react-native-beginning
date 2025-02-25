import { useGlobalSearchStore } from "@/store/globalSearchStore";
import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const FavouriteScreenHeader = () => {
  const { toggleGlobalSearch } = useGlobalSearchStore();
  return (
    <View style={favouriteScreenStyles.headerContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={toggleGlobalSearch}>
        <Ionicons name="search" size={26} color="gray" />
      </TouchableOpacity>
      <Text style={favouriteScreenStyles.favouriteText}>Favourites</Text>
      <Ionicons name="cart" size={26} color="gray" />
    </View>
  );
};

export default FavouriteScreenHeader;
