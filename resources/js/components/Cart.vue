<template>
    <div>
         <v-row >
    <v-col md="6" offset-md ="2">
      <panel title="Cart">
        <v-row>
            <v-col>
                <div v-if="cart.length > 0">
    <div class="title">
      <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
    </div>
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id" ></product-details>
    </template>
  </div>
  <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1></div>


                
                
                
                
                
                
                
                
                
                </v-col>




        </v-row>
        
      </panel>
    </v-col>
  </v-row>
  </div>
</template>
<script>
import panel from './globals/Panel'
import ProductDetails from './products/ProductDetails'
  export default {
    data () {
      return {
       
      }
    },
    computed:{
         cart(){return this.$store.getters.allCart}
         },
    components: {
      productDetails: ProductDetails
    }
  }
</script>



 