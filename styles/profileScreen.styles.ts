import { StyleSheet } from "react-native";
import { homeScreenStyles } from "./homeScreen.styles";

export const profileScreenStyles = StyleSheet.create({
  container: {
    ...homeScreenStyles.container,
  },
  // header styles
  headerContainer: {
    ...homeScreenStyles.headerContainer,
  },
  headerText: {
    ...homeScreenStyles.headerBeautifulText,
  },
});
