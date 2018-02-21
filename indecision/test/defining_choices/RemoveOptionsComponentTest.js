import RemoveOptionsComponentTest from "../../src/defining_choices/RemoveOptionsComponent.js";
import React from "react";
import RemoveOptionsComponent from "../../src/defining_choices/RemoveOptionsComponent";

describe("RemoveOptionsComponent Tests", () => {
  const subject = shallow(<RemoveOptionsComponent/>);
  it("should render a RemoveOptionsComponent", () => {
    expect(subject).toBeDefined();
  });
});