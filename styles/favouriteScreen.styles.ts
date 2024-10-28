import { StyleSheet } from "react-native";
import { uiStyles } from "./global.styles";
import { homeScreenStyles } from "./homeScreen.styles";

export const favouriteScreenStyles = StyleSheet.create({
  // header styles
  container: {
    ...homeScreenStyles.container,
  },
  headerContainer: {
    ...homeScreenStyles.headerContainer,
    paddingBottom: 10,
  },
  favouriteText: {
    ...homeScreenStyles.headerBeautifulText,
  },

  // favourite product card styles
  sectionContainer: {
    flex: 1,
    position: "relative",
  },
  productsContainer: {
    paddingBottom: 65,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    position: "relative",
  },
  productDetailsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    color: "#606060",
    fontSize: 14,
    marginBottom: 5,
  },
  productPrice: {
    color: "#303030",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 999,
    width: 32,
    height: 32,
    position: "absolute",
    top: 0,
    right: 0,
    marginVertical: 12,
  },
  shoppingBagIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginVertical: 12,
  },
  shoppingBagIcon: {
    width: 34,
    height: 34,
  },

  // add all to cart styles
  addAllToCartButton: {
    ...uiStyles.button,
    width: "100%",
    marginBottom: 10,
    position: "absolute",
    bottom: 0,
    elevation: 10,
  },
});
