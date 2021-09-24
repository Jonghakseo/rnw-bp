//eslint-disable
import { ThemeProvider } from "styled-components/native";
import appTheme from "../styled/AppTheme";
import React from "react";
import { Provider } from "react-redux";
import reduxStore from "../redux/store";

const withProvider = (children) => {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default withProvider;
