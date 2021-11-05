<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to My Vue.js App"/> -->
  <Products :msg="message"/>
  <input type="text" v-model="message" />
  <button @click="alertMessage">Ok</button>
</template>

<script>
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    Products
  },
  data(){
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    alertMessage(){
      alert(this.message)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
