import React, { ReactElement } from "react";
import { AppRegistry, Platform } from "react-native";
import { Navigation } from "./navigation";
import { ThemeProvider } from "styled-components/native";
import appTheme from "./styled/AppTheme";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";

export function App(): ReactElement {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={appTheme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}

AppRegistry.registerComponent("example", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("example", {
    rootTag: document.getElementById("root"),
  });
}
