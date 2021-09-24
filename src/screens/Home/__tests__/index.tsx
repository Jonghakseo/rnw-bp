import React from "react";
import { Home } from "..";
import renderer from "react-test-renderer";
import { mockNavigation } from "../../../mocks/Setup";
import withProvider from "../../../testHelper";

it("should render correctly", () => {
  const component = renderer.create(withProvider(<Home />));
  expect(component.toJSON()).toMatchSnapshot();
});

it("navigates to details", () => {
  const component = renderer.create(withProvider(<Home />));
  const button = component.root.findByProps({ testID: "go to detail button" });
  button.instance.props.onPress();
  expect(mockNavigation.navigate).toBeCalledWith("Details", { data: "🤪" });
});
