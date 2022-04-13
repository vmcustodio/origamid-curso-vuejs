<template>
  <div id="app">
    <button @click="componenteAtivo = 'AulaDescricao'">Descrição</button>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>

    <div>
      <ul>
        <li @click="abaAtivaExercicios = 'SobreEmpresa'">Sobre</li>
        <li @click="abaAtivaExercicios = 'ServicoEmpresa'">Serviços</li>
        <li @click="abaAtivaExercicios = 'ContatoEmpresa'">Contato</li>
      </ul>
      <keep-alive>
        <component :is="abaAtivaExercicios"></component> 
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao.vue"
import AulaDownload from "./components/AulaDownload.vue"
import SobreEmpresa from "./components/SobreEmpresa.vue"
import ContatoEmpresa from "./components/ContatoEmpresa.vue"
import ServicoEmpresa from "./components/ServicosEmpresa.vue"

export default {
  name: 'app',
  components: {
    AulaDescricao,
    AulaDownload,
    SobreEmpresa,
    ContatoEmpresa,
    ServicoEmpresa
  },
  data() {
    return {
      componenteAtivo: "AulaDescricao",
      abaAtivaExercicios: "SobreEmpresa",
   }
  }
};
</script>

<style>

</style>
