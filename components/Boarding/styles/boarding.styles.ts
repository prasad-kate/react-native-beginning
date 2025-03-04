import { StyleSheet } from "react-native";

export const boardingStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 30,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textMakePart: {
    color: "#606060",
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  textBeautiful: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 5,
  },
  textDescription: {
    color: "#808080",
    fontSize: 18,
    marginTop: 20,
  },
  welcomeTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    gap: 8,
    flexWrap: "wrap",
  },
  boardingButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
