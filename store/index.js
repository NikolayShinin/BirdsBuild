import {products} from '~/assets/data/data.json'

export const state = () => ({
  products: []
})

export const getters = {
  getProducts(state) {
    return state.products
  }
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
}

export const actions = {
  fetchProduct(ctx) {
    const productsData = products.map(product => {
      const props = {
        like: false,
        transactions: false,
        done: false
      }
      if (this.$cookies.get('likes')?.find(like => like === product.id)) {
        props.like = true
      }
      if (this.$cookies.get('transactions')?.find(transaction => transaction === product.id)) {
        props.transactions = true
      }
      if (this.$cookies.get('done')?.find(done => done === product.id)) {
        props.done = true
      }
      return {
        ...product,
        ...props
      }
    })
    ctx.commit('setProducts', productsData)
  }
}
