<template>
  <div id="app">
    <NavbarRow />      
    <div class="container mt-3">
      <div class="row">
        <router-view />
      </div>
    </div>  
  </div>
  
</template>


<script>
import NavbarRow from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    NavbarRow,

  },
  
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
