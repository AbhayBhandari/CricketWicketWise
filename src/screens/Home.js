import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Constants from "expo-constants";

import MenuButton from "./../components/elements/MenuButton";
import HalfModal from "./../components/elements/HalfModal"; // Ensure this component is used somewhere in your project
import colors from "../utilities/Colors";
import MenuListFirstInnings from "../components/MenuListFirstInnings";
import MatchConfigurationContainer from "../containers/MatchConfiguration.container";
import MenuListHome from "../components/MenuListHome";

const Home = () => {
  const navigation = useNavigation();

  const [menuListVisible, setMenuListVisible] = useState(false);
  const [matchSettingsVisible, setMatchSettingsVisible] = useState(false);

  const onMenuBtnPress = () => setMenuListVisible(true);
  const closeMenu = () => setMenuListVisible(false);
  const showMatchSettings = () => setMatchSettingsVisible(true);
  const closeMatchSettings = () => setMatchSettingsVisible(false);

  const onMatchSettingsPress = () => {
    closeMenu();
    showMatchSettings();
  };

  const handleMatchPress = (item) => {
    console.log("item", item);
    navigation.navigate("SingleMatchInn1", { match: item });
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={onMenuBtnPress}>
        <MenuButton />
      </TouchableOpacity>

      <HalfModal show={menuListVisible}>
        <MenuListHome
          onMatchSettingsPress={onMatchSettingsPress}
          onClosePress={closeMenu}
        />
      </HalfModal>

      <HalfModal show={matchSettingsVisible}>
        <MatchConfigurationContainer close={closeMatchSettings} />
      </HalfModal>

      <View style={styles.parent}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleMatchPress({})}
        >
          <Image
            resizeMode="contain"
            style={styles.img}
            source={require("./../../assets/tournament-icon.png")}
          />
          <Text style={styles.matchTypeText}>TOURNAMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight,
  },
  parent: {
    top: Dimensions.get("screen").height / 4.2,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  matchTypeText: {
    marginTop: 20,
    fontSize: responsiveFontSize(2),
    color: "#555555",
    fontWeight: "bold",
    letterSpacing: 2,
    alignSelf: "center",
  },
  img: {
    width: responsiveWidth(65),
    height: responsiveHeight(25),
  },
});

export default Home;
