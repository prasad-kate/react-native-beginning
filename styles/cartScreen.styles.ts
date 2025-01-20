import { StyleSheet } from "react-native";
import { favouriteScreenStyles } from "./favouriteScreen.styles";
import { uiStyles } from "./global.styles";

export const cartScreenStyles = StyleSheet.create({
  // main container
  container: {
    paddingBottom: 20,
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
    width: 10,
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

  // empty cart screen
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyCartImage: {
    width: "75%",
    marginBottom: 50,
  },
});
