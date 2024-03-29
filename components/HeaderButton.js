import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === "ios" ? Colors.primaryColor : "#fff"}
  />
);

export default CustomHeaderButton;
