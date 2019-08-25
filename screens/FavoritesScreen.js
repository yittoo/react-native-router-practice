import React from "react";

import MealList from "../components/MealList";
import BurgerNav from "../components/BurgerNav";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
  const FavMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return (
    <MealList listData={FavMeals} navigation={props.navigation}></MealList>
  );
};

FavoritesScreen.navigationOptions = navData => ({
  headerTitle: "Your Favorites",
  headerLeft: (
    <BurgerNav
      title="Menu"
      onPress={() => navData.navigation.toggleDrawer()}
    ></BurgerNav>
  )
});

export default FavoritesScreen;
