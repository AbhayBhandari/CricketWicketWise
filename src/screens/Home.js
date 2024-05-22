import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Constants from "expo-constants";

import MenuButton from "./../components/elements/MenuButton";
import HalfModal from "./../components/elements/HalfModal"; // Ensure this component is used somewhere in your project

const Home = () => {
  const navigation = useNavigation();

  const handleMatchPress = (item) => {
    navigation.navigate("SingleMatchInn1", { match: item });
  };

  return (
    <View style={styles.page}>
      <MenuButton />

      <View style={styles.parent}>
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>START GAME</Text>
        </View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => handleMatchPress({})}
        >
          <View>
            <Image
              style={styles.img}
              source={require("./../../assets/single-match-icon.png")}
            />
            <Text style={styles.matchTypeText}>SINGLE MATCH</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => handleMatchPress({})}
        >
          <View>
            <Image
              style={styles.img}
              source={require("./../../assets/tournament-icon.png")}
            />
            <Text style={styles.matchTypeText}>TOURNAMENT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
  parent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  item: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: responsiveFontSize(2),
    color: "#888888",
  },
  matchTypeText: {
    marginTop: 30,
    fontSize: responsiveFontSize(2),
    color: "#555555",
    fontWeight: "bold",
    letterSpacing: 2,
    alignSelf: "center",
  },
  img: {
    marginTop: 1,
    marginRight: 2,
    width: responsiveWidth(60),
    height: responsiveHeight(17),
  },
});

export default Home;
