import React from "react";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import Welcome from ".";
import CenterView from "../CenterView";

storiesOf("Welcome", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);
