import { StyleSheet } from "react-native";
import { cartScreenStyles } from "./cartScreen.styles";

export const singleProductScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerContentStyles: {
    justifyContent: "space-between",
    flex: 1,
  },
  productImageContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: "15%",
  },
  productImage: {
    borderBottomLeftRadius: 52,
    width: "100%",
    aspectRatio: "3/4",
    position: "relative",
  },
  backButtonContainer: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    position: "absolute",
    left: -20,
    top: "10%",

    // iOS Shadow
    shadowColor: "#8A959E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,

    // Android Shadow
    elevation: 10,
  },

  // product details title styles
  productDetailsContainer: {
    paddingHorizontal: 25,
  },
  poductTitle: {
    color: "#303030",
    fontSize: 24,
    marginVertical: 25,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  productPriceAndCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPrice: {
    fontSize: 30,
    fontWeight: "bold",
  },
  productRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  productRating: {
    color: "#303030",
    fontSize: 18,
  },
  reviewsText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
  },
  productDetailsText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
  },

  // add to cart/favourites styles
  addToCartOrFavouritesContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
  addToFavouritesButtonContainer: {
    width: 55,
    height: 55,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  addToCartButton: {
    ...cartScreenStyles.cartCheckoutButton,
    width: "auto",
    flex: 1,
  },

  // skeleton styles
  productNameSkeleton: {
    height: 30,
    width: "50%",
    marginTop: 10,
  },

  productPriceSkeleton: {
    width: "20%",
    marginTop: 10,
    height: 35,
  },
  descriptionSkeleton: {
    marginTop: 20,
  },
});
