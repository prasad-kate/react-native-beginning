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
    fontWeight: "bold",
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
  error: {
    color: "red",
    fontSize: 12,
  },

  // outlined version styles
  outlinedInput: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    fontSize: 16,
    borderRadius: 4,
  },
});

export const textInputStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
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
    fontSize: 16,
    color: "#000",
  },
  error: {
    color: "red",
    fontSize: 12,
  },

  // outlined version styles
  outlinedInput: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    fontSize: 16,
    borderRadius: 4,
  },
});

export const checkboxStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 5,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
  },
});

export const plusIconButtonStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 52,
    width: 52,
    borderRadius: 26,

    // iOS shadow properties
    shadowColor: "#8A959E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 60, // Equivalent to blur

    // Android shadow property
    elevation: 4,
  },
});

// TODO: styling dropdown as per the theme
export const dropdownStyles = StyleSheet.create({
  standardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 20,
  },
  outlinedContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  standardPicker: {
    fontSize: 16,
    color: "#000",
    height: 50,
  },
  outlinedPicker: {
    fontSize: 16,
    color: "#000",
    height: 50,
    backgroundColor: "#F5F5F5",
  },
});
