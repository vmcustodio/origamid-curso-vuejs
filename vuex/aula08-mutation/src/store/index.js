import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Lobo", // acesso a ela em todos os components
    aulasCompletas: 10,
  },
  getters: {},
  mutations: {
    CHANGE_USER(state, payload) {
      state.user = payload.user;
      // console.log(payload.totalAulas)
    },
    COMPLETAR_AULA(state) {
      state.aulasCompletas++;
    },
  },
  actions: {},
  modules: {},
});
