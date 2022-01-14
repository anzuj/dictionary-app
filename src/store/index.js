import Vue from "vue";
import Vuex from "vuex";
// import module1 from "./modules/module1";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  strict: true,
  state: {
    datasets: [
      {
        name: "Phones",
        id: "shsdrzj65",
        items: [
          { product: "Apple iPhone 6s", color: "Stonegrey", price: "769" },
          { product: "Samsung Galaxy S8", color: "Midnight Black", price: "569" },
          { product: "Huawei P9", color: "Mystic Silver", price: "272" },
        ],
      },
      {
        name: "Laptops",
        id: "34sdrz",
        items: [
          { product: "Macbook Pro 14''", color: "White", price: "1999" },
          { product: "HP Spectre x360", color: "Rose Gold", price: "1100" },
          { product: "Asus ROG Zephyrus G15", color: "Carbon", price: "2200" },
          { product: "LG Gram 17", color: "Black", price: "1590" },
        ],
      },
    ],
    dictionaries: [

        {
            name: "Phone colors",
            id: "354dhdsdrzj65",
            items: [
                { domain: "Stonegrey", range: "Dark Grey" },
                { domain: "Midnight Black", range: "Black" },
                { domain: "Mystic Silver", range: "Silver" },
                { domain: "Unicorn Dream", range: "Pink" }
            ],
          },
    ],
  },
  getters: {
    getCat: (state) => {
      return state.cat;
    },
  },
  mutations: {
    ADD_DICTIONARY(state, dictionary) {
      state.dictionaries.push(dictionary);
    },
    ADD_DATASET(state, dataset) {
      state.datasets.push(dataset);
    },
  },
  actions: {
    /*   updateCat(context, newCat) {
            context.commit("UPDATE_CAT", newCat)
        }, */
  },
});
