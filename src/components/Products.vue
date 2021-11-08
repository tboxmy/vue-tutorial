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
    {{content}} 
    <img
      id="profile-img" width=200
      :src="content.message"    
    /> {{content.status}} 

<div></div>
  </div>
</template>
<script>
import ProductService from "../services/products";
export default {
  name: 'Products',
  data(){
    return {
      msg: "My products",
      content: "",
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
  },
  mounted() {
    ProductService.getRandomImage().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
}
</script>
<style scoped>
</style>