<template>
  <div>
    <div class="container">
      <div class="filter">
        <product-filter
          v-model="filterValue"
          :filterItems="filterItems"
        />
        <search
          v-model="textSearch" f
        />
      </div>
      <div
        v-if="products.length"
        class="product-list"
      >
        <div class="product-list__item"
             v-for="(product, idx) in products"
             :key="idx"
        >
          <product-item
            :productItem="product"
          />
        </div>
      </div>
      <div
        v-else
        class="product-empty"
      >
        товаров с указаными свойствами не найдено
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/search";
import ProductItem from "../components/product-item";
import ProductFilter from "../components/product-filter";

export default {
  name: 'IndexPage',
  components: {ProductFilter, ProductItem, Search},
  computed: {
    products() {
      return this.productFilter(this.$store.getters.getProducts, this.filterValue, this.textSearch)
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct')
  },
  data() {
    return {
      filterValue: 'all',
      textSearch: '',
      filterItems: [
        {
          value: 'all',
          label: 'Все типы'
        },
        {
          value: 'sales',
          label: 'Прямые продажи'
        },
        {
          value: 'Auction',
          label: 'Аукцион'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
