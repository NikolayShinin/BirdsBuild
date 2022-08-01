<template>
  <div class="product-item">
    <div class="product-item__info">
      <div class="product-item__img">
        <img :src="productItem.img.src" :alt="productItem.img.alt">
      </div>
      <div class="product-item__content">
        <div class="product-item__type">
          {{ productItem.type.label }}
        </div>
        <div class="product-item__title">
          {{ productItem.title }}
        </div>
        <div class="product-item__location">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 14.5C7.5 14.5 12.5 9.40909 12.5 5.59091C12.5 2.66213 10.2614 0.5 7.5 0.5C4.73858 0.5 2.5 2.66213 2.5 5.59091C2.5 9.40909 7.5 14.5 7.5 14.5ZM7.49979 7.86848C8.68326 7.86848 9.64265 6.87879 9.64265 5.65795C9.64265 4.43711 8.68326 3.44743 7.49979 3.44743C6.31632 3.44743 5.35693 4.43711 5.35693 5.65795C5.35693 6.87879 6.31632 7.86848 7.49979 7.86848Z" fill="#969DC3"/>
          </svg>
          <span>
            {{ productItem.location }}
          </span>
        </div>
        <div class="product-item__seller">
          Продавец
          <span>
            {{ productItem.seller }}
          </span>
        </div>
        <div class="product-item__view">
          Вид товара
          <span>
            {{ productItem.view }}
          </span>
        </div>
        <div class="product-item__description">
          {{ productItem.description }}
        </div>
      </div>
    </div>
    <div class="product-item__price">
      <div class="product-item__top">
        <div class="product-item__total">
          {{ productItem.price.total | formatPrice() }} {{productItem.price.currency}}
        </div>
        <div class="product-item__quantity">
          Количество
          <span>
          {{ productItem.price.quantity }} шт.
        </span>
        </div>
        <div class="product-item__cost">
          Стоимость за штуку
          <span>
          {{ productItem.price.cost | formatPrice() }} {{ productItem.price.currency }}
        </span>
        </div>
      </div>
      <div
        v-if="!productItem.done"
        class="product-item__bottom"
      >
        <button
          v-if="!productItem.transactions"
          class="product-item__btn"
          @click="setCookie(productItem, 'transactions')"
        >
          Добавить в сделки
        </button>
        <button
          v-else
          class="product-item__btn product-item__btn--green"
          @click="setCookie(productItem, 'done')"
        >
          Оплатить
        </button>
        <button
          @click="setCookie(productItem, 'likes')"
          class="product-item__like"
          :class="{
            active: productItem.like
          }"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.33423 5.15646C3.76936 5.66876 3.37143 6.48526 3.37143 7.72395C3.37143 8.49178 3.74054 9.37595 4.39401 10.3171C5.0395 11.2468 5.91325 12.1619 6.80764 12.9768C7.69901 13.7889 8.59325 14.4856 9.26619 14.98C9.5571 15.1937 9.80563 15.3689 9.99334 15.4985C10.182 15.3641 10.4326 15.1821 10.7264 14.9604C11.4003 14.4517 12.296 13.7378 13.1889 12.9135C14.0848 12.0864 14.9605 11.1642 15.6075 10.2403C16.2647 9.30178 16.6286 8.44202 16.6286 7.72398C16.6286 5.85557 15.1163 4.35487 13.2692 4.35487C12.1581 4.35487 11.1713 4.89912 10.5565 5.74372C10.4277 5.92072 10.2205 6.02564 9.99979 6.02563C9.77911 6.02562 9.57192 5.92069 9.44309 5.74369C8.82837 4.89912 7.84181 4.35487 6.73039 4.35487C5.73916 4.35487 4.90933 4.63487 4.33423 5.15646ZM9.99982 16.3229C9.62433 16.8897 9.6242 16.8897 9.62404 16.8896L9.62215 16.8883L9.61733 16.8852L9.5999 16.8738C9.58488 16.864 9.56313 16.8497 9.5351 16.831C9.47905 16.7938 9.39785 16.7394 9.29508 16.669C9.08961 16.5284 8.79758 16.3242 8.44779 16.0672C7.74933 15.554 6.81505 14.8266 5.87789 13.9728C4.94375 13.1217 3.98898 12.129 3.26308 11.0835C2.54515 10.0495 2 8.89125 2 7.72395C2 6.1806 2.50766 4.97383 3.40677 4.15839C4.29563 3.35224 5.48815 3 6.73039 3C8.00311 3 9.15307 3.50391 9.99985 4.31539C10.8467 3.50391 11.9967 3 13.2692 3C15.8899 3 18 5.12338 18 7.72398C18 8.85265 17.4496 9.99111 16.7353 11.0111C16.0108 12.0458 15.0579 13.0425 14.1252 13.9034C13.1895 14.7672 12.2565 15.5105 11.559 16.037C11.2097 16.3007 10.9181 16.5109 10.7131 16.6559C10.6105 16.7284 10.5295 16.7845 10.4736 16.823C10.4457 16.8422 10.424 16.8569 10.4091 16.8671L10.3918 16.8788L10.3871 16.882L10.3857 16.8829C10.3855 16.883 10.385 16.8834 9.99982 16.3229ZM9.99982 16.3229L10.3857 16.8829C10.1567 17.0365 9.85564 17.0393 9.62404 16.8896L9.99982 16.3229Z"
                  fill="currentColor"/>
          </svg>
        </button>
      </div>
      <div
        v-else
        class="product-item__bottom"
      >
        <button
          class="product-item__btn"
          disabled
        >
          Оплачено
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-item",
  props: [
    'productItem'
  ]
}
</script>

<style lang="scss" scoped>

.product-item {
  display: flex;
  background: #FFFFFF;
  border: 1px solid #E0E3EE;
  border-radius: 20px;
  // .product-item__info
  &__info {
    display: flex;
    padding: 20px 20px 80px;
  }

  // .product-item__img
  &__img {
    position: relative;
    flex: 0 0 30%;
    margin: 0px 20px 0px 0px;
    border-radius: 10px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // .product-item__content
  &__content {
  }

  // .product-item__type
  &__type {
    font-size: 13px;
    color: #969DC3;
    margin: 0px 0px 15px 0px;
  }

  // .product-item__title
  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0px 0px 12px 0px;
    height: 38px;
    font-weight: 500;
    font-size: 15px;
    line-height: 125%;
    color: #2D3B87;
  }

  // .product-item__location
  &__location {
    display: inline-flex;
    align-items: center;
    margin: 0px 0px 12px 0px;
    padding: 4px 8px;
    background: #F4F5F9;
    border-radius: 5px;
    font-size: 13px;
    color: #616CA5;

    svg {
      margin: 0px 4px 0px 0px;
    }
  }

  // .product-item__seller
  &__seller {
    margin: 0px 0px 12px 0px;
    font-size: 13px;
    color: #969DC3;

    span {
      color: #2D3B87;
    }
  }

  // .product-item__view
  &__view {
    display: inline-flex;
    flex-direction: column;
    padding: 8px;
    margin: 0px 0px 12px 0px;
    background: #F4F5F9;
    border-radius: 10px;
    font-size: 13px;
    color: #969DC3;

    span {
      margin-top: 6px;
      color: #616CA5;
    }
  }

  // .product-item__description
  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    color: #2D3B87;
  }

  // .product-item__price
  &__price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #E0E3EE;
    border-radius: 20px;
    flex: 0 0 26%;
    width: 26%;
  }

  // .product-item__top

  &__top {

  }

  // .product-item__total
  &__total {
    margin: 0px 0px 8px 0px;
    font-weight: 500;
    font-size: 20px;
    color: #2D3B87;
  }

  // .product-item__quantity
  &__quantity {
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 8px 0px;
    font-size: 13px;
    color: #969DC3;

    span {
      text-align: right;
      color: #2D3B87;
    }
  }

  // .product-item__cost
  &__cost {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #969DC3;

    span {
      text-align: right;
      color: #2D3B87;
    }
  }

  // .product-item__bottom
  &__bottom {
    display: flex;
  }

  // .product-item__btn
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    height: 50px;
    background: #F4F5F9;
    border-radius: 10px;
    font-weight: 500;
    font-size: 15px;
    color: #2D3B87;
    &:not(:last-child) {
      margin: 0px 12px 0px 0px;
    }
    &--green {
      background: #69C57F;
      color: #FFFFFF;
    }
    &:disabled {
      background: #FFFFFF;
      border: 1px solid #E0E3EE;
      color: #969DC3;
    }
  }

  // .product-item__like
  &__like {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 50px;
    width: 50px;
    height: 50px;
    background: #F4F5F9;
    border-radius: 10px;
    svg {
      color: #2D3B87;
    }
    &.active {
      background: #2D3B87;
      svg {
        color: #F4F5F9;
      }
    }
  }
}

</style>
