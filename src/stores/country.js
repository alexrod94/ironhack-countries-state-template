import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => ({
      countryFlag: "",
      name: "",
      capital: "",
      area: "",
      borders: [],
  }),
  actions: {
    changeCountryFlag(url) {
      this.countryFlag = url 
    },
    changeName(name) {
      this.name = name 
    },
    changeCapital(capital) {
      this.capital = capital
    },
    changeArea(area) {
      this.area = area
    },
    changeBorders(borders) {
      this.borders = borders
    },
  }
});
