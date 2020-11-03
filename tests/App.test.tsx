import * as React from "react";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

import App from "../src/components/App";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
const { shallow, render, mount } = Enzyme;

describe("App", () => {
  it("renders a div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass("app")).toBe(true);
  });
  // contains page title
  it("renders a title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toBe("Chuck Norris Joke Generator");
  });
  // contains nav
  it("renders a nav", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("nav").exists()).toBe(true);
  });
  // nav contains buttons   

  // contains body
  it("renders a main joke container", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("div.jokeContainer").exists()).toBe(true);
  });
  // body contains button

  // contains footer
  it("renders a footer", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("footer").exists()).toBe(true);
  });
  // -----

  // default route is random endpoint
  // button click generates text
  // subsequent button click replaces text in same div

  // -----

  // bespoke button takes user to different endpoint
  // body contains two text boxes (add labels) and button
  // generates a joke with first and last name inserted
  // subsequent button click replaces text in same div

  // -----

  // endless button takes user to different endpoint
  // body contains button
  // generates 5 jokes
  // subsequent button click concat text in same div
});
