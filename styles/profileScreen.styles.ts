import { StyleSheet } from "react-native";
import { homeScreenStyles } from "./homeScreen.styles";

export const profileScreenStyles = StyleSheet.create({
  container: {
    ...homeScreenStyles.container,
    paddingHorizontal: 0,
  },
  // header styles
  headerContainer: {
    ...homeScreenStyles.headerContainer,
    marginHorizontal: 20,
    position: "relative",
  },
  headerText: {
    ...homeScreenStyles.headerBeautifulText,
    flex: 1,
    textAlign: "center",
  },
  logoutButtonContainer: {
    position: "absolute",
    right: 0,
  },
  // profile details styles
  profileDetailsContainer: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 30,
    marginHorizontal: 20,
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

  // options styles
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: "white",

    // iOS Shadow
    shadowColor: "#8A959E",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2, // 33% opacity for shadow
    shadowRadius: 40,

    // Android Shadow
    elevation: 12,
  },
  optionName: {
    color: "#242424",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  optionDescription: {
    color: "#808080",
    fontSize: 12,
  },
});
