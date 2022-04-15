<template>
  <p>User {{ $store.state.aulasCompletas }}</p>
</template>

<script>
export default {
  computed: {
    aulasCompletas() {
      return this.$store.state.aulasCompletas;
    },
  },
};
</script>
