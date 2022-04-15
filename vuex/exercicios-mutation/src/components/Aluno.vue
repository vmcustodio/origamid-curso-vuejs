<template>
  <div>Aluno {{aulasCompletas}}</div>
</template>

<script>
import {mapState} from "vuex"

export default{
  computed: {
    ...mapState(["aulasCompletas"])
  }
}
</script>
