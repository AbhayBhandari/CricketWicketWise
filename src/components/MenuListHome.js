import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function MenuListHome(props) {
  return (
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={props.onMatchSettingsPress}>
        <Text style={[styles.buttonText, styles.menuItem]}>Match Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onClosePress}>
        <Text style={[styles.buttonText, styles.menuItem]}>Close Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    marginBottom: 30,
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
  },
});
