import { StyleSheet } from "react-native";
import { uiStyles } from "./global.styles";
import { homeScreenStyles } from "./homeScreen.styles";
import { profileScreenStyles } from "./profileScreen.styles";

export const detailsScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  // order details styles
  headerContainer: {
    ...homeScreenStyles.headerContainer,
    position: "relative",
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  headerText: {
    ...homeScreenStyles.headerBeautifulText,
    position: "relative",
    flex: 1,
    textAlign: "center",
  },
  backIcon: {
    position: "absolute",
    left: 0,
    top: 10,
  },

  // order details tab styles
  tabBar: {
    backgroundColor: "transparent",
    marginHorizontal: 20,
  },
  tabDetailsContainer: {
    paddingVertical: 20,
    flex: 1,
  },
  indicator: {
    backgroundColor: "black",
  },
  label: {
    textTransform: "none",
    fontSize: 16,
    fontWeight: "bold",
  },

  // order details card styles
  orderDetailsCardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#8A959E",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 25,
    marginHorizontal: 20,
  },
  orderDetailsCardHeader: {
    paddingVertical: 15,
    paddingHorizontal: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
  },
  orderDetailsTotalContainer: {
    borderWidth: 0,
    borderColor: "transparent",
  },
  orderDetailsButtonContainer: {
    borderWidth: 0,
    borderColor: "transparent",
    paddingLeft: 0,
    alignItems: "center",
  },
  orderDetailsButton: {
    ...uiStyles.button,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  orderDetailsKeyText: {
    fontSize: 16,
    color: "#808080",
    fontWeight: "bold",
  },
  orderDetailsValueText: {
    fontWeight: "bold",
    color: "black",
  },
  orderDate: {
    color: "#808080",
    fontSize: 14,
  },
  orderStatus: {
    color: "#27AE60",
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "bold",
  },

  // empty order details section
  emptyOrderDetailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  notFoundImage: {
    width: 400,
    height: 400,
    marginBottom: 50,
  },

  // payment methods styles
  paymentMethodsContainer: {
    padding: 20,
  },
  paymentMethodCardContainer: {
    width: "100%",
    aspectRatio: "16/9",
    borderRadius: 10,
    overflow: "hidden",
    // marginBottom: 20,
    position: "relative",
  },
  paymentMethodCardImage: {
    resizeMode: "cover",
    borderRadius: 10,
  },
  paymentMethodCardNumber: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    left: 30,
    top: "40%",
  },
  paymentMethodsCardHolderDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 30,
    left: 0,
    width: "100%",
    paddingHorizontal: 30,
  },
  paymentMethodCardValueText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  paymentMethodCardTitleText: {
    color: "white",
    opacity: 0.8,
    fontSize: 12,
    marginBottom: 5,
  },
  paymentCardSelectionCheckboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 15,
  },
  paymentCardSelectionCheckboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
  paymentCardSelectionCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 5,
  },

  // shipping details styles
  shippingDetailsCardContainer: {
    ...profileScreenStyles.optionsContainer,
    marginHorizontal: 20,
    flexDirection: "column",
    // justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 0,
  },
  shippindDetailsCardHeader: {
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shippindAddressName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  shippindAddress: {
    color: "#808080",
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
