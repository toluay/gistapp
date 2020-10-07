<template>

  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4 ">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'products'
        }">
       NEWER Store
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items color ="cyan">
      <v-btn
      color ="cyan"
        flat
        dark
        :to="{
          name: 'products'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      
      <v-btn
      
        flat
        dark
        color ="cyan"
        :to="{
          name: 'cart'
        }">
       Cart
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        color ="cyan"
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        color ="cyan"
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        color ="cyan"
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
