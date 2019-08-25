import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import BurgerNav from "../components/BurgerNav";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
  const renderGridItem = itemData => (
    <CategoryGridTile
      onPress={() => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: { categoryId: itemData.item.id }
        });
      }}
      itemData={itemData}
    />
  );

  return (
    <FlatList
      keyExtractor={item => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = navData => ({
  headerTitle: "Meal Categories",
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
