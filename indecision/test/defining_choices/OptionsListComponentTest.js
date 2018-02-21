import OptionsListComponent from "../../src/defining_choices/OptionsListComponent.js";
import React from "react";

describe("OptionsListComponent Tests", () => {
  const subject = shallow(<OptionsListComponent />);
  it("should render an OptionsListComponent", () => {
    expect(subject).toBeDefined();
  });
});