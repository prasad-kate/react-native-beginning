import FavouriteProductsSections from "@/components/FavouritesScreen/FavouriteProductsSections";
import FavouriteScreenHeader from "@/components/FavouritesScreen/FavouriteScreenHeader";
import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import { View } from "react-native";

const BookmarkScreen = () => {
  return (
    <View style={favouriteScreenStyles.container}>
      <FavouriteScreenHeader />
      <FavouriteProductsSections />
    </View>
  );
};

export default BookmarkScreen;
