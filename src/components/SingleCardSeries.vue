<template>
  
    <div class="container">

      <div class="row">
        <div class="col-2 gap-4" v-for="(film, index) in seriesDetails" key="index">
          <div class="card-body">
    
            <div class="overflow">
              <img v-if="film.backdrop_path == null" src="https://picsum.photos/185/105" alt="">
              <img v-else :src="'https://image.tmdb.org/t/p/w342'+ film.backdrop_path"  alt="" class="img-fluid">
            </div>
            <h5 class="card-title">Titolo:{{film.name}}</h5>
            <p class="card-text">Titolo originale:{{film.original_title}}</p>
            <p class="card-text">Lingua originale:{{film.original_language}}</p>
            <p class="card-text">Voto:{{film.vote_average}}</p>
            <p class="card-text"></p>
          </div>
        </div>
    
      </div>
    </div>
  
    

</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default{
    data(){
        return{
          props: {
            seriesDetails: Object
  },

        }
    }
}
</script>

<style lang="scss" scoped>
</style>