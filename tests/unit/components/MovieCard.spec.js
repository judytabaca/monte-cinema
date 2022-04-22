import { shallowMount } from "@vue/test-utils";
import MovieCard from "@/components/movies/MovieCard.vue";

const createComponent = () => shallowMount(MovieCard, { propsData: { movie } });

const movie = {
  title: "Predator",
  poster_url: "img/predator.png",
  description:
    "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
  genre: {
    name: "Action",
  },
  length: 87,
};

describe("MovieCard.vue", () => {
  it("display header title", () => {
    const wrapper = createComponent();
    expect(wrapper.find("h2").text()).toMatch("Predator");
  });

  it("display image from url", () => {
    const wrapper = createComponent();
    expect(wrapper.find("img").attributes("src")).toBeTruthy;
  });

  it("display correct genre", () => {
    const wrapper = createComponent();
    expect(wrapper.find(".movie__wrapper__genre").text()).toMatch("Action");
  });

  it("display correct genre", () => {
    const wrapper = createComponent();
    expect(wrapper.find(".movie__wrapper__time").text()).toMatch("1h 27min");
  });
});
