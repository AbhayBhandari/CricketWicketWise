import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

import MenuButton from "./../components/elements/MenuButton";
import SecondInningsContainer from "./../containers/SecondInnings.container";
import SecondInningsTeam1Container from "./../containers/SecondInningsTeam1.container";
import ThisOver2Container from "./../containers/ThisOver2.container";
import ThisOverHits2Container from "./../containers/ThisOverHits2.container";
import UndoRedoButtons from "./../components/elements/UndoRedoButtons";
import ToWinContainer from "./../containers/ToWin.container";
import ControlPanel2Container from "./../containers/ControlPanel2.container";
import HalfModal from "./../components/elements/HalfModal";
import MenuListSecondInnings from "./../components/MenuListSecondInnings";

const SingleMatchInn2 = () => {
  const navigation = useNavigation();
  const [menuListVisible, setMenuListVisible] = useState(false);

  const onMenuBtnPress = () => setMenuListVisible(true);
  const closeMenu = () => setMenuListVisible(false);
  const onFirstInningsPress = () => {
    closeMenu();
    navigation.goBack();
  };
  const onEndMatchPress = () => {
    // Add logic for ending the match if necessary
  };

  return (
    <View style={styles.page}>
      <View style={{ flexGrow: 1, flexBasis: "15%" }}>
        <TouchableOpacity onPress={onMenuBtnPress}>
          <MenuButton />
        </TouchableOpacity>
        <SecondInningsTeam1Container />
        <SecondInningsContainer />
        <ToWinContainer />
        <ThisOver2Container />
        <ThisOverHits2Container />
      </View>
      <ControlPanel2Container />

      <HalfModal show={menuListVisible}>
        <MenuListSecondInnings
          onFirstInningsPress={onFirstInningsPress}
          onEndMatchPress={onEndMatchPress}
          onClosePress={closeMenu}
        />
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

export default SingleMatchInn2;
