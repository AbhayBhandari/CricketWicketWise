import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Constants from "expo-constants";

import MenuButton from "./../components/elements/MenuButton";
import FirstInningsContainer from "./../containers/FirstInnings.container";
import FirstInningsTeam2 from "./../components/FirstInningsTeam2";
import ThisOver1Container from "./../containers/ThisOver1.container";
import ThisOverHits1Container from "./../containers/ThisOverHits1.container";
import UndoRedoButtons from "./../components/elements/UndoRedoButtons";
import ControlPanel1Container from "./../containers/ControlPanel1.container";
import MatchConfigurationContainer from "./../containers/MatchConfiguration.container";
import HalfModal from "./../components/elements/HalfModal";
import MenuListFirstInnings from "./../components/MenuListFirstInnings";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const SingleMatchInn1 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const match = route.params?.match;

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

  const onEndInningPress = () => {
    closeMenu();
    navigation.navigate("SingleMatchInn2");
  };

  return (
    <View style={styles.page}>
      <View style={{ flexGrow: 1, flexBasis: "15%" }}>
        <TouchableOpacity onPress={onMenuBtnPress}>
          <MenuButton
            iconStyle={{
              width: responsiveFontSize(4),
              height: responsiveFontSize(4),
            }}
          />
        </TouchableOpacity>

        <FirstInningsContainer />
        <FirstInningsTeam2 displayTeam2Score={"Yet to bat"} />
        <ThisOver1Container />
        <ThisOverHits1Container />
      </View>

      <ControlPanel1Container />

      <HalfModal show={menuListVisible}>
        <MenuListFirstInnings
          onEndInningPress={onEndInningPress}
          onMatchSettingsPress={onMatchSettingsPress}
          onClosePress={closeMenu}
        />
      </HalfModal>

      <HalfModal show={matchSettingsVisible}>
        <MatchConfigurationContainer close={closeMatchSettings} />
      </HalfModal>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    height: "100%",
  },
});

export default SingleMatchInn1;
