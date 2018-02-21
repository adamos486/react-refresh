import AddOptionComponent from "../../src/defining_choices/AddOptionComponent.js";
import React from "react";

describe("AddOptionComponent Tests", () => {
  it("should render main Add Option UI", () => {
    const subject = shallow(<AddOptionComponent />);
    expect(subject).toBeDefined();
  });
});