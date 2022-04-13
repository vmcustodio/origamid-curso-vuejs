<template>
  <div id="app">
    <modal-principal>
     <template v-slot:header="{ logo }">
       Esse é o header
       {{logo}}
     </template>
     <template v-slot:default="{ user }">  <!-- desestruturação de objetos - ira procurar direto no objeto que vem se existe alguma propriedade chamada user  -->
        <p>{{user.nome}}</p> 
        <p>Esse é um teste</p>  <!-- aparecerá todo o conteudo que está aqui dentro do slot -->
        <button>Comprar</button>
      </template>
      <template v-slot:footer>
        <p>Esse é o footer</p> 
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue"
export default {
  name: 'app',
  components: {
    ModalPrincipal
  }
};
</script>

<style>

</style>
