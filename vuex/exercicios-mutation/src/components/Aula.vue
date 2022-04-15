<template>
  <div>
    <p>Aulas</p>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>{{aula.nome}} | {{aula.duracao}}</p>
        <button @click="handleClick(aula)">Completar Aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15
        },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ]
    }
  },
  methods: {
    completarAula(aula) { // sendo passado o objeto da aula em si // mutation sendo chamada diretamente
      this.$store.commit("COMPLETAR_AULA", aula)
    },
    handleClick(aula) {
      this.$store.dispatch("completarAula", aula) // dessa forma esta chamando uma ação e a ação faz o commit
    }
  }
}
</script>
