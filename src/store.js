import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: [
      {
        title: "Photos",
        date: "",
        isComplete: false,
      },
      {
        title: "dsdsd",
        date: "",
        isComplete: false,
      },
      {
        title: "dsdsds",
        date: "",
        isComplete: false,
      },
    ],
  },
  getters: {
    getState: (state) => {
      return state.tasks;
    },
  },
});
export default store;
