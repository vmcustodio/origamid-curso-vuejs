<template>
  <div id="app">
    <!-- {{$store.state.acao}} api nao estava retornando, acao sendo o nome do modulo- verificar -->
  <ul>
    <li v-for="livro in $store.state.livros" :key="livro.nome">
      <p>{{livro.nome}}</p>
    </li>
  </ul>
  <h2>Livros Lidos</h2>
  <ul>
    <li v-for="livro in $store.getters.livrosLidos" :key="livro.nome">
      <p>{{livro.nome}}</p>
    </li>
  </ul>
   <aluno></aluno>
   <curso></curso>
  </div>
</template>

<script>
import Aluno from "@/components/Aluno.vue"
import Curso from "@/components/Curso.vue"

export default {
  name: "app",
  components: {
    Aluno,
    Curso
  },
  created() {
    this.$store.dispatch("acao/puxarAcao");
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
