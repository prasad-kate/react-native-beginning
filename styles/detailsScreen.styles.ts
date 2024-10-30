import { StyleSheet } from "react-native";
import { uiStyles } from "./global.styles";
import { homeScreenStyles } from "./homeScreen.styles";

export const detailsScreenStyles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
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
    top: 5,
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
});
