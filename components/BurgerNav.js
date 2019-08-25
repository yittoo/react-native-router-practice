import React from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "./HeaderButton";

const BurgerNav = props => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title={props.title}
      iconName={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
      onPress={props.onPress}
    />
  </HeaderButtons>
);

export default BurgerNav;
