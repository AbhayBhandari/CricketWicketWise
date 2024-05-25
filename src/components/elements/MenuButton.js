import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const MenuButton = ({ iconStyle }) => {
  return (
    <View>
      <View style={styles.settingsView}>
        <Image
          style={[styles.settingsButton, iconStyle]}
          source={require("./../../../assets/settings.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsView: {
    marginRight: 10,
    marginTop: 10,
    alignItems: "flex-end",
  },
  settingsButton: {
    width: responsiveFontSize(5),
    height: responsiveFontSize(5),
  },
});

export default MenuButton;
