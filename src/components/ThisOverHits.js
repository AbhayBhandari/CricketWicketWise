import React, { Component } from "react";
import { View, Text } from "react-native";

const ThisOverHits = (props) => {
  const dotArrayLength =
    6 -
    props.scores.filter(
      (score) => score !== "wd" && score !== "nb" && score !== "w"
    ).length;
  const dotArray = new Array(dotArrayLength).fill("·");
  const displayArray = [...props.scores, ...dotArray];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginLeft: 25,
        marginTop: 30,
        marginRight: 25,
        marginBottom: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: 20, fontWeight: "900" }}>
          {displayArray.map((item, index) => (
            <Text
              key={index.toString()}
              style={{
                color:
                  item === "W"
                    ? "red"
                    : item === "WD"
                    ? "blue"
                    : item === "NB"
                    ? "orange"
                    : "#666666",
              }}
            >
              {item}
              {"   "}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
};

export default ThisOverHits;
