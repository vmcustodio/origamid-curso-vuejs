export default {
  namespaced: true,
  state: {
    empresa: "apple",
    acao: null
  },
  mutations: {
    UPDATE_ACAO(state, payload) {
      state.acao = payload
    }
  },
  actions: {
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
}