<template>

 
  
  <v-card
   
  dense
  >
    <v-card-title>
      <h2 class="display-1">Toothbrush</h2>
      <v-spacer></v-spacer>
      <span class="title">N4.99</span>
    </v-card-title>

      <v-img
      
      :src="'../storage/profile/enduro-boa.png'"
      height="300px"
    ></v-img>

   
    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <span class="subheading">Select Quantity</span>

      <v-chip-group
        v-model="selection"
        active-class="deep-purple--text text--accent-4"
        mandatory
      >
        <v-chip v-for="size in sizes" :key="size" :value="size" filter outlined>
          {{ size }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <span class="subheading">Select type</span>

      <v-chip-group
        v-model="selection1"
        active-class="cyan--text text--accent-4"
        mandatory
      >
        <v-chip filter outlined >Small</v-chip>
        <v-chip filter outlined>Medium</v-chip>
        <v-chip filter outlined>Large</v-chip>
        <v-chip filter outlined>X-large</v-chip>
      </v-chip-group>
    </v-card-text>
      <v-card-actions>
      <v-btn
        
        class="white--text"
        color="cyan"
        @click="overlay = !overlay"
      >
        Add to Cart
      </v-btn>
      <v-overlay
          :absolute="absolute"
          :value="overlay"
        >
          <v-btn
            color="cyan"
            @click="overlay = false"
          >
              Added to cart
          </v-btn>
        </v-overlay>

    
        
    

     
    </v-card-actions>

    
    
  </v-card>
  



 
</template>

<script>
import {productsservice} from '../../services/ProductsService'

import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  
  data () {
    return {
      songs: null,
       selection1: 2,
       absolute: true,
      overlay: false,
         show: false,
         selection: '08',
      sizes: [
        '1', '2', '3', '4', '5', '6',
      ],
    }
  },
  computed: mapGetters({
    products: 'allProducts',
    length: 'getNumberOfProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  watch: {
    
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
