import { StyleSheet } from "react-native";
import { uiStyles } from "./global.styles";
import { homeScreenStyles } from "./homeScreen.styles";

export const checkoutStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "white",
  },

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
    marginBottom: 15,
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

  // payment details styles
  paymentDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  paymentDetailsCardIconContainer: {
    borderRadius: 8,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 6,

    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 12.5,

    // Shadow properties for Android
    elevation: 6,
  },
  paymentDetailsCardIconImage: {
    width: 32,
    height: 25,
  },
  paymentDetailsCardNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "##242424",
  },

  // order details styles
  orderDetailsContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 15,
  },
  orderDetailsTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderDetailTitle: {
    color: "#808080",
    fontSize: 14,
  },
  orderDetailValue: {
    color: "#242424",
    fontSize: 16,
  },

  // submit order buttons styles
  submitOrderButton: {
    ...uiStyles.button,
    width: "100%",
    marginVertical: 35,
    borderRadius: 8,
  },
});
