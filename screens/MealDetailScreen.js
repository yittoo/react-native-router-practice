import React from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const renderItems = arr =>
  arr.map((item, index) => (
    <View key={index} style={s.listItem}>
      <DefaultText>
        {index + 1}) {item}
      </DefaultText>
    </View>
  ));

const MealDetailScreen = props => {
  const data = props.navigation.getParam("data").item;
  return (
    <ScrollView>
      <Image source={{ uri: data.image }} style={s.image} />
      <View style={s.details}>
        <DefaultText>{data.duration}m</DefaultText>
        <DefaultText>{data.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{data.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={s.title}>Ingredients</Text>
      <View style={s.list}>{renderItems(data.ingredients)}</View>
      <Text style={s.title}>Steps</Text>
      <View style={s.list}>{renderItems(data.steps)}</View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const { title } = navigationData.navigation.getParam("data").item;
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("Mark as favorite")}
        />
      </HeaderButtons>
    )
  };
};

const s = StyleSheet.create({
  image: { width: "100%", height: 200 },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 22
  },
  list: {
    padding: 8
  }
});

export default MealDetailScreen;
