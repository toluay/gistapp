<template>
<div id="app">
    <v-app app>
      <Heeed/>
    
  

       <v-content app>   
    
        <v-container fluid>
        
            <router-view></router-view>
        
        </v-container>
     
            
      
              
     </v-content> 
   
            <Footer app></Footer>


    </v-app>
  </div>
  
</template>
<script>

export default {
  components: {
      
    
         Header : () => import('./components/Header'),
          Heeed: () => import('./components/testerm1'),
       
         Footer : () => import('./components/Footer'),
       
        
  },
  
    
  }
</script>
      
     <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.danger-alert {
  color: red;
}
</style>

