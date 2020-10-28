import * as React from "react";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

import App from "../src/components/App";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
const { shallow, mount } = Enzyme;

describe("App", () => {
  it("renders a div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass("app")).toBe(true);
  });
});
