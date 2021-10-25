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
  const mockData = [
    {
      value: [{ joke: "Chuck Norris joke A", id: 1 }],
    },
    {
      value: [{ joke: "Chuck Norris joke B", id: 2 }],
    },
    {
      value: [{ joke: "Chuck Norris joke C", id: 3 }],
    },
    {
      value: [{ joke: "Chuck Norris joke D", id: 4 }],
    },
    {
      value: [{ joke: "Chuck Norris joke E", id: 5 }],
    },
    {
      value: [{ joke: "Chuck Norris joke F", id: 6 }],
    },
  ];
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
    it("generates a new joke when the button is clicked", async () => {
      let counter = 0;
      const mock = new MockAdapter(axios);

      mock
        .onGet("http://api.icndb.com/jokes/random/1")
        .reply(200, mockData[counter++]);

      const wrapper = mount(<App />);
      expect(wrapper.find("div.jokeContainer").exists()).toBe(true);
      expect(wrapper.find("div#randomJokeContainer").exists()).toBe(true);

      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe("");
      const button = wrapper.find("button.jokeContainer__button");

      await act(async () => {
        button.simulate("click");
      });

      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe(
        "Chuck Norris joke A"
      );

      mock
        .onGet("http://api.icndb.com/jokes/random/1")
        .reply(200, mockData[counter++]);

      await act(async () => {
        button.simulate("click");
      });
      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe(
        "Chuck Norris joke B"
      );
    });
  });

  describe("'bespoke' endpoint", () => {
    it("generates a new joke when the button is clicked", async () => {
      let counter = 0;
      const mock = new MockAdapter(axios);

      mock
        .onGet("http://api.icndb.com/jokes/random/1")
        .reply(200, mockData[counter++]);

      const wrapper = mount(<App />);
      const bespokeNavButton = wrapper
        .find("div.nav__buttonsWrapper")
        .find("a")
        .filterWhere((aTag) => aTag.find("div").text() === "Bespoke")
        .find("div");

      await act(async () => {
        bespokeNavButton.simulate("click", { button: 0 });
      });

      wrapper.update();

      expect(wrapper.find("div.jokeContainer").exists()).toBe(true);
      expect(wrapper.find("#bespokeJokeContainer").exists()).toBe(true);

      expect(wrapper.find("div.jokeContainer__labelAndInput").length).toBe(2);

      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe("");
      const button = wrapper.find("button.jokeContainer__button");

      await act(async () => {
        button.simulate("click");
      });

      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe(
        "Chuck Norris joke A"
      );

      mock
        .onGet("http://api.icndb.com/jokes/random/1")
        .reply(200, mockData[counter++]);

      await act(async () => {
        button.simulate("click");
        wrapper.update();
      });
      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe(
        "Chuck Norris joke B"
      );
      // add spies to assert functions have been called with coorect args
    });
  });

  describe("'endless' endpoint", () => {
    it("generates more jokes when the button is clicked", async () => {
      let counter = 0;
      const mock = new MockAdapter(axios);

      mock.onGet("http://api.icndb.com/jokes/random/5").reply(200, mockData);

      const wrapper = mount(<App />);
      const endlessNavButton = wrapper
        .find("div.nav__buttonsWrapper")
        .find("a")
        .filterWhere((aTag) => aTag.find("div").text() === "Endless")
        .find("div");

      await act(async () => {
        endlessNavButton.simulate("click", { button: 0 });
      });

      wrapper.update();

      expect(wrapper.find("div.jokeContainer").exists()).toBe(true);
      expect(wrapper.find("#endlessJokeContainer").exists()).toBe(true);

      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe("");
      const generateJokeButton = wrapper.find("#generateJokeButton");

      await act(async () => {
        generateJokeButton.simulate("click");
      });

      expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe(
        "Chuck Norris joke A"
      );

      // mock
      //   .onGet("http://api.icndb.com/jokes/random/1")
      //   .reply(200, mockData[counter++]);

      // await act(async () => {
      //   generateJokeButton.simulate("click");

      // });
      // expect(wrapper.find("div.jokeContainer__jokeText").text()).toBe(
      //   "Chuck Norris joke B"
      // );
      // add spies to assert functions have been called with coorect args
    });
  });
  // endless button takes user to different endpoint
  // body contains button
  // generates jokes
  // subsequent button click concat text in same div
});
