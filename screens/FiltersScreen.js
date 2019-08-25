import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

import BurgerNav from "../components/BurgerNav";
import Colors from "../constants/Colors";

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  return (
    <View style={s.screen}>
      <Text style={s.title}>Available Filters / Restrictions</Text>
      <View style={s.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Colors.accentColor}
          value={isGlutenFree}
          onValueChange={newValue => setIsGlutenFree(newValue)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => ({
  headerTitle: "Filter Meals",
  headerLeft: (
    <BurgerNav
      title="Menu"
      onPress={() => navData.navigation.toggleDrawer()}
    ></BurgerNav>
  )
});

const s = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%"
  }
});

export default FiltersScreen;
