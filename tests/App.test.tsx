import * as React from "react";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import axios from "axios";
import { act } from "react-dom/test-utils";
import "./tempPolyfills.js";
import "regenerator-runtime/runtime.js";

import MockAdapter from "axios-mock-adapter";

import App from "../src/components/App";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
const { shallow, mount } = Enzyme;

describe("App", () => {
  describe("initially rendered components", () => {
    it("renders a div", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.hasClass("app")).toBe(true);
    });
    it("renders a title", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find("h1").text()).toBe("Chuck Norris Joke Generator");
    });
    it("renders a nav", () => {
      const wrapper = mount(<App />);
      expect(wrapper.find("nav").exists()).toBe(true);
    });


    it("renders a main joke container", () => {
      const wrapper = mount(<App />);
      expect(wrapper.find("div.jokeContainer").exists()).toBe(true);
    });


    it("renders a footer", () => {
      const wrapper = mount(<App />);
      expect(wrapper.find("footer").exists()).toBe(true);
    });
  });

  describe("'random' endpoint", () => {
    const mockData = {
      value: [{ joke: "Chuck Norris is very strong HA", id: 1 }],
    };
    beforeEach(() => {
      const mock = new MockAdapter(axios);
      mock.onGet("http://api.icndb.com/jokes/random/1").reply(200, mockData);
    });
    it("generates a joke when the button is clicked", async () => {
      const wrapper = mount(<App />);
      expect(wrapper.find("div.jokeContainer").exists()).toBe(true);
      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe("");
      const button = wrapper.find("button.jokeContainer__button");

      await act(async () => {
        button.simulate("click");
        wrapper.update();
      });

      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe(
        "Chuck Norris is very strong HA"
      );
    });
    // ask Raf - best way to program multiple mock responses - check that text gets replaced
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
