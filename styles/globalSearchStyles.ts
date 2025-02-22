import { StyleSheet } from "react-native";

export const globalSearchStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50,
    paddingHorizontal: 20,
    zIndex: 1000,

    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,

    backgroundColor: "rgba(0, 0, 0, 0.15))",
    paddingBottom: 30,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    paddingHorizontal: 5,
    paddingVertical: 8,
    color: "black",
  },
});
