import HeaderComponent from "../../src/foundation/HeaderComponent.js";
import React from "react";

describe("HeaderComponent Tests", () => {
  const subject = shallow(<HeaderComponent/>);
  it("should render a HeaderComponent", () => {
    expect(subject).toBeDefined();
  });
});