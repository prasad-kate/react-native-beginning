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
    marginVertical: 50,
  },
});

export const userRegistrationFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
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
  formContainer: {
    backgroundColor: "#fff",
    marginVertical: 20,
    paddingHorizontal: 25,
    paddingVertical: 30,
    borderRadius: 20,
    gap: 30,
  },
  submitButton: {
    backgroundColor: "#242424",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
});
