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
  hr: {
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10,
  },
});

export const passwordInputStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  icon: {
    paddingLeft: 8,
    paddingVertical: 5,
  },
});
