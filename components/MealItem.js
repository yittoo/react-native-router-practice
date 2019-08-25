import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

import DefaultText from "./DefaultText";

const MealItem = props => {
  const { itemData, onSelectMeal, style } = props;
  const { title, duration, complexity, affordability, image } = itemData.item;

  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={{ ...s.mealItem, ...style }}>
      <TouchableCmp style={{ flex: 1 }} onPress={onSelectMeal}>
        <View style={{ ...s.container }}>
          <View style={{ ...s.mealRow, ...s.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={s.bgImage}>
              <View style={s.titleContainer}>
                <Text style={s.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...s.mealRow, ...s.mealDetail }}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const s = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  container: {
    flex: 1
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "#fff",
    textAlign: "center"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    flex: 17
  },
  mealDetail: {
    flex: 3,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  }
});

export default MealItem;
