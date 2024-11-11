import { StyleSheet } from "react-native";
import { homeScreenStyles } from "./homeScreen.styles";

export const checkoutStyles = StyleSheet.create({
  container: { paddingHorizontal: 20 },

  // header styles
  headerContainer: {
    ...homeScreenStyles.headerContainer,
    position: "relative",
    paddingVertical: 10,
    marginBottom: 20,
  },

  // checkout details styles
  checkoutDetailsCardContainer: {
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#8A959E",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 40,
    elevation: 10,
    borderRadius: 8,
  },
  checkoutDetailsHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  checkoutDetailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#909090",
  },

  // address details styles
  addressName: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  address: {
    color: "#808080",
    fontSize: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});