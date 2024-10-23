import { StyleSheet } from "react-native";

export const registerUserStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  authPageIconContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const userRegistrationFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 8,
    marginBottom: 20,
    fontSize: 16,
    color: "#000",
  },
});
