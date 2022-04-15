import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    acao: null,
    livros: [
      {
        nome: "O senhor dos Anéis",
        lido: true
      },
      {
        nome: "Harry Potter",
        lido: true
      },
      {
        nome:"As Crônicas de Gelo e Fogo",
        lido: false,
      }
    ]
  },
  getters: {
    livrosLidos(state) {
      return state.livros.filter(livro => livro.lido)
    }
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      state.aulasCompletas.push(payload)
    },
    UPDATE_ACAO(state, payload) {
      state.acao = payload
    }
  },
  actions: {
    completarAula(context, payload) {
      context.commit("COMPLETAR_AULA", payload);
    },
    puxarAcao(context) { // context é o objeto que contem commit, dispatch, getters e tbm o state sem poder alterar o estado
      fetch("https://api.iextrading.com/1.0/stock/aapl/quote")
      .then(r => r.json())
      .then(respostaJSON => {
        context.commit("UPDATE_ACAO", respostaJSON)
        context.dispatch("completarAula", {
          aula: "Apple"
        })
      })
    }
  },
  modules: {
  }
})
