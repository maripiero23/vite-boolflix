<template>
  
    <div class="container">

      <div class="row">
        <div class="col-2 gap-4" v-for="(series, index) in movieDetails" key="index">
          <div class="card-body">
    
            <div class="overflow">
              <img v-if="series.backdrop_path == null" src="https://picsum.photos/185/282" alt="">
              <img v-else :src="'https://image.tmdb.org/t/p/w342'+ series.poster_path"  alt="" class="img-fluid">
            </div>
            <h5 class="card-title">Titolo:{{series.title}}</h5>
            <p class="card-text">Titolo originale:{{series.original_title}}</p>
            <p class="card-text">Lingua originale:{{series.original_language}}</p>
            <p class="card-text">Voto:{{series.vote_average}}</p>
            <p class="card-text"></p>
          </div>
        </div>
    
      </div>
    </div>
  
    

</template>

<script>
export default{
  props: {
    movieDetails: Object
  },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
</style>