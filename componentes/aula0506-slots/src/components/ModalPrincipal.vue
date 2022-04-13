<template>
  <div class="modal">
    <slot name="header" :logo="logo"></slot> <!-- aqui importa a organização do slot -->
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>

export default {
  name: 'ModalPrincipal',
  data() {
    return {
      logo: "Techno",
      user: {
        nome: "André"
      }
    }
  }
};
</script>

<style>

</style>
