import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as types from './mutation-types'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: debug,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    added: [],
  all: [
    
    {
      id: '23',
      name: 'Brwown Shirt ',
      description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
        'features tactile, clicky switches for speed and accuracy',
      price: 595,
      category:'Medium',
      img_path: '../storage/profile/enduro-boa.png'
    }
  ]
  },
  // getters
 getters : {
	allProducts: state => state.all, // would need action/mutation if data fetched async
	getNumberOfProducts: state => (state.all) ? state.all.length : 0,
	cartProducts: state => {
		return state.added.map(({ id, quantity }) => {
			const product = state.all.find(p => p.id === id)

			return {
				name: product.name,
				price: product.price,
				quantity
			}
    })
    
  },
  allCart: state=>{
    return state.added
  }
},
  mutations: {
    [types.REMOVE_FROM_CART]: (state, payload) => {
      const index = state.cart.findIndex(p => p._id === payload)
      state.cart.splice(index, 1)
      console.log(state.cart, state.cart.length, index)
    },
    [types.SET_TOKEN] (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    [types.SET_USER] (state, user) {
      state.user = user
    },
    [types.ADD_TO_CART] (state, { id }) {
	    const record = state.added.find(p => p.id === id)

	    if (!record) {
	      state.added.push({
	        id,
	        quantity: 1
	      })
	    } else {
	      record.quantity++
	    }
	  }
  },
  actions: {
    setToken ({commit}, token) {
      commit(types.SET_USER, token)
    },
    setUser ({commit}, user) {
      commit(types.SET_USER, user)
    },
    addToCart({ commit }, product){
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }
  }
})
