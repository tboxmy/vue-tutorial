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
  data(){
    return {
      msg: "My products",
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
    };
  }
}
</script>
<style scoped>
</style>