import { StyleSheet } from "react-native";

export const uiStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#242424",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    width: 160,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "semibold",
  },
});
