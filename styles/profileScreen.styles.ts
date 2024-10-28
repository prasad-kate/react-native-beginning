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

  // profile details styles
  profileDetailsContainer: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  profileDetailsTextContainer: {
    justifyContent: "center",
  },
  profileName: {
    fontSize: 20,
    color: "#303030",
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "#808080",
  },
});
