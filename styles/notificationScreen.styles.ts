import { StyleSheet } from "react-native";
import { favouriteScreenStyles } from "./favouriteScreen.styles";
import { homeScreenStyles } from "./homeScreen.styles";

export const notificationScreenStyles = StyleSheet.create({
  // header styles
  headerText: {
    ...homeScreenStyles.headerMakeHomeText,
    textAlign: "center",
    marginVertical: 10,
  },
  // notification cards styles
  cardContainer: {
    ...favouriteScreenStyles.cardContainer,
  },
  productDetailsContainer: {
    ...favouriteScreenStyles.productDetailsContainer,
    gap: 12,
    flex: 1,
  },
  productImage: {
    ...favouriteScreenStyles.productImage,
  },
  textContainer: {
    flex: 1,
    textAlign: "left",
  },
  productTitle: {
    ...favouriteScreenStyles.productPrice,
  },
  productDescription: {
    ...favouriteScreenStyles.productName,
  },
});
