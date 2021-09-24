import appTheme from "../src/styled/AppTheme";

type Theme = typeof appTheme;

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}

declare module "styled-components" {
  export interface ThemeProps {
    theme: Theme;
  }
}
