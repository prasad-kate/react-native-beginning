import { StyleSheet } from "react-native";
import { homeScreenStyles } from "./homeScreen.styles";

export const detailsScreenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 1,
  },

  // order details styles
  headerContainer: {
    ...homeScreenStyles.headerContainer,
    position: "relative",
    paddingVertical: 10,
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
  },
  indicator: {
    backgroundColor: "black",
  },
  label: {
    color: "#999999",
    textTransform: "none",
    fontSize: 16,
  },
});
