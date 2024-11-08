import { StyleSheet } from "react-native";
import { favouriteScreenStyles } from "./favouriteScreen.styles";

export const cartScreenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
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
});
