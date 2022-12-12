<template>
    
  <TheHeader></TheHeader>
  <div class="container">
    <TheMain></TheMain>
    <TheFooterVue></TheFooterVue>

  </div>
      
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import MovieSeriesFilterVue from './components/MovieSeriesFilter.vue';
import FilmListVue from './components/FilmList.vue';
import SerieList from './components/SerieList.vue';
import TheFooterVue from './components/TheFooter.vue';

export default{
  components:{TheHeader, MovieSeriesFilterVue, FilmListVue, SerieList, TheFooterVue},
  data() {
    return{

    }
  }
}
</script>


<style lang="scss">

</style>
