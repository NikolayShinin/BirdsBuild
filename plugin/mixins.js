import Vue from 'vue'
import { formatPriceConstants } from '../constants/formatPrice'
const mixin = {
  filters: {
    formatPrice(number, decimals = formatPriceConstants.decimals, decPoint = formatPriceConstants.decimals, thousandsSep = formatPriceConstants.thousandsSep) {
      // честно скажу эту функцию я взял с гугла
      var i, j, kw, kd, km;
      if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
      }
      if (decPoint == undefined) {
        decPoint = ",";
      }
      if (thousandsSep == undefined) {
        thousandsSep = ".";
      }
      i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
      if ((j = i.length) > 3) {
        j = j % 3;
      } else {
        j = 0;
      }
      km = (j ? i.substr(0, j) + thousandsSep : "");
      kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousandsSep);
      kd = (decimals ? decPoint + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
      return km + kw + kd;
    }
  },
  methods: {
    setCookie(item, event) {
      let cookies = this.$cookies.get(event)
      let isDelete = true
      if (cookies?.length) {
        const indexCookie = cookies.findIndex(cookie=> cookie === item.id)
        if (indexCookie != -1) {
          isDelete = false
          cookies.splice(indexCookie, 1)
        } else {
          cookies.push(item.id)
        }
      } else {
        cookies = [item.id]
      }
      this.$cookies.set(event, cookies)
      this.$store.dispatch('fetchProduct')
    },
    productFilter(products, filter, search) {
      let productsResult = []
      if (filter) {
        if (filter != 'all') {
          productsResult = products.filter(product => product.type.value === filter)
        } else {
          productsResult = products
        }
      }
      if (search) {
        productsResult = products.filter(product => product.title.indexOf(search) != -1)
      }
      return productsResult
    }
  }
}

Vue.mixin(mixin)
