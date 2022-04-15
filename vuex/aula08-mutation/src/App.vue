<template>
  <div id="app">
    <router-view />
    <user />
    <curso />
  </div>
</template>

<script>
import User from "@/components/User.vue";
import Curso from "@/components/Curso.vue";

export default {
  name: "app",
  components: {
    User,
    Curso,
  },
};
</script>
<style></style>
