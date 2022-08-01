<template>
  <div class="product-filter">
    <div
      class="product-filter__item"
      v-for="(filterItem, idx) in filterItems"
      :key="idx"
    >
      <label>
        <input
          type="radio"
          :value="filterItem.value"
          :checked="isChecked(filterItem)"
          @change="$emit('change', $event.target.value)"
        >
        <span>
          {{ filterItem.label }}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-filter",
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['filterItems', 'checked'],
  methods: {
    isChecked(filterItem) {
      if (filterItem.value === this.checked) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>

.product-filter {
  display: flex;
  align-items: center;
  background: #F4F5F9;
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  padding: 12px;
  margin: 0px -6px;
  // .product-filter__item
  &__item {
    padding: 0px 6px;

    span {
      font-size: 15px;
      color: #969DC3;
    }

    label {
      cursor: pointer;
    }

    input {
      display: none;

      &:checked + span {
        color: #2D3B87;
      }
    }
  }
}

</style>
