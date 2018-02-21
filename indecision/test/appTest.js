import IndecisionApp from "../src/app.js";
import React from "react";
import { shallow, mount, render } from "enzyme";
import util from "util";;

describe("app", () => {
  it("renders the app component", () => {
    const app = shallow(<IndecisionApp />);
    // console.log(util.inspect(app, true, null));
    expect(app).toBeDefined();
  });
});
