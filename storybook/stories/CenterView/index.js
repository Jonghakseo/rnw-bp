import React from "react";
import { View } from "react-native";
import style from "./style";

export default function CenterView({ children }) {
  return (
    <View style={style.outer}>
      <View style={style.inner}>{children}</View>
    </View>
  );
}

CenterView.defaultProps = {
  children: null,
};
