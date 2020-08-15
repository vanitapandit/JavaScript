import React from "react";
import DataContainer from "./DataContainer";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

test("DataContainer renders without crashing", () => {
  let tree = mount(<DataContainer />);
  expect(tree.find(".data-container__wrapper")).toBeTruthy();
});
