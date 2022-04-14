<template>
  <div>
    <h1>Curso ativo: {{curso}}</h1>
    <router-link :to="{name: 'curso', params: { curso: 'javascript' }}">JavaScript</router-link>
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>

     <router-view></router-view> <!--//vai ser utilizado para mostrar todos os filhos que estiverem dentro de cursos -->
  </div>
</template>

<script>
export default {
  props: ["curso"], // mostrando o curso ativo
  created() {
    console.log("Esse componente foi criado");
  },
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>

<style>
</style>
