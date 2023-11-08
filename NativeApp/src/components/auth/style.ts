import { relative } from "path";
import { StyleSheet } from "react-native";

export const Loginstyle = StyleSheet.create({
  textpad: {
    position: "relative",
    top: 167,
    left: -14,
    padding: 30,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    position: "relative",
    top: 206,
    left: 90,

    width: "50%",
    backgroundColor: "#4857E4",
    padding: 12,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    padding: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    height: 55,
    borderColor: "#4857E4",
    borderWidth: 1,
    borderRadius: 15,
    position: "relative",
    fontSize: 24,
    left: 14,
    top: 67,
    paddingLeft: 20,
    backgroundColor: "transparent",
    color: "#4857E4",
  },
});
