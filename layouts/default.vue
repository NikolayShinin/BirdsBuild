<template>
  <div>
    <Header/>
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  name: "default.vue",
  components: {Header}
}
</script>

<style lang="scss">

body {
  font-family: 'Rubik';
}

.container {
  width: 100%;
  max-width: 1230px;
  padding: 0px 15px;
  margin: 0 auto;
}

.filter {
  display: flex;
  justify-content: space-between;
  margin: 80px 0px 0px 0px;
}
.product-list {
  margin: 40px 0px 0px 0px;

  // .product-list__item
  &__item {
    &:not(:last-child) {
      margin: 0px 0px 40px 0px;
    }
  }
}

.product-empty {
  margin: 40px 0px 0px 0px;
  text-align: center;
  font-size: 15px;
  line-height: 125%;
  color: #2D3B87;
}

</style>
