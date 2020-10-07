<template>
  <div class="product-details">
    <v-container>
      <v-row>
        <v-col lg="4" md="4" sm="6" xs="12" >
          <img
            class="img-responsive" :src="product.image" alt="">
        </v-col>
        <v-col class=" product-details__info" lg="8" md="8" sm="6" xs="12">
          <div class="product-details__description">
            <small>{{product.manufacturer && product.manufacturer.name}}</small>
            <h3>{{product.name}}</h3>
            <p>
              {{product.description}}
            </p>
          </div>
          <div class="product-details__price-cart">
            <p>${{product.price}}</p>
            <product-button :product="product" ></product-button>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import ProductButton from './ProductButton'
  export default {
    props: ['product'],
    components: {
      'product-button': ProductButton
    }
  }
</script>

<style>
  .product-details {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
 
  .product-details__description {
    padding-top: 30px;
  }
  .product-details__description small {
    color: #808080;
  }
  .product-details__description h3 {
    margin: 5px 0 30px 0;
  }
  .product-details__price-cart {
    display: flex;
    padding-top: 30px;
  }
  .product-details__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
</style>