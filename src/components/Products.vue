<template>
  <div class="products">
      <h1>{{ msg }}</h1>
  </div>
</template>
<script>

export default {
  name: 'Products',
  props: {
    msg: String
  }
}
</script>