<template>
    
  <TheHeader @search="doSearch"></TheHeader>
  <div class="container">
    
    <TheMain></TheMain>

  </div>
      
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';


import {store, fetchMovies, fetchSeriesTv} from './store'
import axios from 'axios'

export default{
  components:{TheHeader, TheMain},
  data() {
    return{
      store,

    }
  },
  methods: {
    doSearch(){
      fetchMovies();
      fetchSeriesTv();
    
      console.log("dosearch", store.searchText);
      //recuper input utente

    }

  }
}
</script>


<style lang="scss">

</style>
