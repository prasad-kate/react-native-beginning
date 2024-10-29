import { StyleSheet } from "react-native";
import { homeScreenStyles } from "./homeScreen.styles";

export const detailsScreenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
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
    // backgroundColor: "blue",
    textAlign: "center",
  },
  backIcon: {
    position: "absolute",
    left: 0,
    top: 5,
  },
});
