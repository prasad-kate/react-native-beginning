import { StyleSheet } from "react-native";
import { favouriteScreenStyles } from "./favouriteScreen.styles";
import { uiStyles } from "./global.styles";

export const cartScreenStyles = StyleSheet.create({
  // main container
  container: {
    paddingBottom: 20,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "white",
  },

  // cart item card styles
  cartItemContainer: {
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
    flexDirection: "row",
    gap: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
  },
  cartItemDetailsContainer: {
    justifyContent: "space-between",
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cartItemTitle: {
    color: "#999999",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 6,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  cartItemNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartNumberAddRemoveButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonContainer: {
    ...favouriteScreenStyles.cancelButtonContainer,
  },

  // enter promo code styles
  promoCodeSectionContainer: {
    paddingHorizontal: 20,
  },
  promoCodeInputAndButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  promoCodeInputContainer: {
    flex: 1,
  },
  promoCodeInputStyles: {
    borderWidth: 0,
    backgroundColor: "white",
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: 10,

    // Shadow for iOS
    shadowColor: "#8A959E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 20, // iOS blur effect

    // Shadow for Android
    elevation: 10,
    marginBottom: 0,
  },
  promoCodeSubmitButton: {
    width: 48,
    height: 48,
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  // cart total styles
  cartTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    // marginBottom: 20,
    marginHorizontal: 10,
  },
  cartTotalText: {
    color: "#808080",
    fontWeight: "bold",
    fontSize: 20,
  },
  cartTotal: {
    fontWeight: "bold",
    fontSize: 20,
  },

  // checkout button styles
  cartCheckoutButton: {
    ...uiStyles.button,
    width: "100%",
    marginVertical: 15,
    borderRadius: 8,
  },
});
