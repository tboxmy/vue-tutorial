<template>
<div id="app" class="container">  
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to My Vue.js App"/> -->
  <NavbarPage />
  <Products :msg="message" :products="products"/>
  <input type="text" v-model="message"  />
  <button @click="alertMessage" class="btn btn-secondary">Ok</button>


</div>
</template>

<script>
import NavbarPage from './components/Navigation.vue'
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
     Products, NavbarPage,
  },
  data(){
    return {
      message: 'My Products',
      products: [
        {
          id: 1,
          name: "Leather shield",
          description: "Tough leather",
          cost: 120 },
        { id:2,
          name: "Heavy Leather shield",
          description: "Double leather layers",
          cost: 150 },
        ],
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
