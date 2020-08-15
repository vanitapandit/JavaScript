import React from "react";
import OptionPicker from "./OptionPicker";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

const mockFn = jest.fn();

describe("OptionPicker", () => {
  it("renders without crashing", () => {
    let tree = mount(<OptionPicker />);
    expect(tree.find("div.dropdown").exists()).toBe(true);
  });
  it("should call mock function when the button is clicked", () => {
    let tree = mount(<OptionPicker handleClick={mockFn} />);
    tree.find("button").simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
