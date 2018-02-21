import Option from "../../src/defining_choices/OptionComponent.js";
import React from "react";

describe("OptionComponent Tests", () => {
  const subject = shallow(<Option />);
  it("renders the OptionComponent", () => {
    expect(subject).toBeDefined();
  });
});