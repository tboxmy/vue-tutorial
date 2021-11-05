<template>
  <div class="products">
      <h1>{{ msg }}</h1>
      <table border=1>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <!--<tr>
           <td>Shield leather</td>
          <td>Made from tough leather and enforced with season wood</td>
          <td>120.00</td>
            </tr> -->
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.cost }}</td>

        </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Products',
  props: {
    msg: String,
    products: Array,
  }
}
</script>
<style scoped>
</style>