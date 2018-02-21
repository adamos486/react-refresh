import IndecisionApp from "../../src/foundation/IndecisionApp";
import React from "react";

describe("IndecisionApp Tests", () => {
  const subject = shallow(<IndecisionApp/>);
  it("should render main App", () => {
    expect(subject).toBeDefined();
  });
});