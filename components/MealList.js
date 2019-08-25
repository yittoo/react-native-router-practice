import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = props => {
  const renderMealItem = itemData => (
    <MealItem
      itemData={itemData}
      onSelectMeal={() =>
        props.navigation.navigate({
          routeName: "MealDetail",
          params: { data: itemData }
        })
      }
    />
  );

  return (
    <View style={s.container}>
      <FlatList
        data={props.listData}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={s.list}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  list: {
    width: "100%"
  }
});
export default MealList;
