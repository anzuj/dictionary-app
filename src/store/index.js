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
          { product: "Apple iPhone 6s", color: "Stonegrey", price: "769", hex:"#ABB1B2", img:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png" },
          { product: "Samsung Galaxy S8", color: "Midnight Black", price: "569" , hex:"#000000", img:"https://cdn.mos.cms.futurecdn.net/zsnAsjFoSy2NdVno2JpTJP-1200-80.jpg"},
          { product: "Huawei P9", color: "Young Forest", price: "272" , hex:"#1AC055", img:"https://www.mobile.yayvomark.com/images/huawei-p9-plus-64gb-4gb-ram-101prices.jpg"},
          { product: "Sony Ericsson Z610i", color: "Unicorn Dream", price: "59" , hex:"#D975F8", img:"https://m.media-amazon.com/images/I/41X5scQbalL._AC_.jpg"},

        ],
      },
      {
        name: "Laptops",
        id: "34sdrz",
        items: [
          { product: "Macbook Pro 14''", color: "White", price: "1999" , hex:"#FFFFFF", img:"https://image.migros.ch/fm-lg2/b545addf0daa328afa4b0545809e491e66900b22/apple-macbook-pro-14-m1-pro-8cpu-14gpu-512gb-ssd-16gb-space.jpg"},
          { product: "HP Spectre x360", color: "Rose Gold", price: "1100", hex:"#EFD0B0", img:"https://www.hp.com/ch-de/shop/Html/Merch/Images/c06460739_500x367.jpg" },
          { product: "Asus ROG Zephyrus G15", color: "Carbon", price: "2200" , hex:"#5F5F5F", img:"https://www.notebookcheck.com/uploads/tx_nbc2/G14-White-53_01.jpg" },
          { product: "LG Gram 17", color: "Black", price: "1590" , hex:"#000000", img:"https://m.media-amazon.com/images/I/61+ieppRVRL._SX569_.jpg"},
        ],
      },
    ],
    dictionaries: [

        {
            name: "Phone colors",
            id: "354dhdsdrzj65",
            items: [
                { domain: "Stonegrey", range: "Dark Grey" , hex:"#ABB1B2" },
                { domain: "Midnight Black", range: "Black", hex:"#000000" },
                { domain: "Young Forest", range: "Green" , hex:"#1AC055" },
                { domain: "Unicorn Dream", range: "Pink" , hex:"#D975F8"}
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
