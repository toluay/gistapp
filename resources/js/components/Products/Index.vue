<template>
<div class= "mt-100">
 
   

    
  
<v-container >


   <v-row >
        <v-col cols="12" md="8" class="d-md-flex"  >
     
       <ProductPanel  />
        <ProductPanel />
         

     </v-col  >
      <v-col cols="6" md="4">
     
       <ProductPanel/>
     </v-col>
     <!-- <v-col >
     
       <ProductPanel/>
     </v-col> -->
     </v-row>
     </v-container>
     </div>
</template>

<script>
import Footer from '../Footer'
import ProductPanel from './ProductPanel'
import { productsservice} from '../../services/ProductsService'
import {mapState} from 'vuex'

export default {
  components: {
    ProductPanel,
    Footer,
   
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await productsService.index()).data
  }
}
</script>

<style scoped>
.adjuster {
  margin-top:"20px"
}

.gethig{
  max-height: 45%;
}


</style>
