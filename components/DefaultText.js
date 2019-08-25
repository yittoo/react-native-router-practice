import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = ({ style, children }) => (
  <Text style={{ ...style, ...s.text }}>{children}</Text>
);

const s = StyleSheet.create({
  text: {
    fontFamily: "open-sans"
  }
});

export default DefaultText;
