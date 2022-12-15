<template>


  <div class="card-body col-2">


    <div class="overflow resize">
      <img v-if="movieDetails.poster_path == null" src="https://picsum.photos/235/353" alt="" class="img-fluid">
      <img v-else :src="'https://image.tmdb.org/t/p/w342' + movieDetails.poster_path" alt="" class="img-fluid">
    </div>
    <div class="text-container text-white">

      <h5 class="card-title">Titolo:{{ movieDetails.original_title ?? movieDetails.name }}</h5>
      <p class="card-text">Titolo originale:{{ movieDetails.original_title ?? movieDetails.name}}</p>
      <p class="card-text">Lingua originale:{{ movieDetails.original_language }}</p>
      <p class="card-text">Voto:{{ movieDetails.vote_average }}</p>
      <div class="stars-container">
            <i class="fa-star fa-solid"
             v-for="star in Math.ceil(movieDetails.vote_average / 2)"></i>
            <i class="fa-star fa-regular"
             v-for="star in 5 - Math.ceil(movieDetails.vote_average / 2)"></i>
      </div>
      <p class="card-text">Trama:{{ movieDetails.overview }}</p>

    </div>
  </div>




</template>

<script>
export default {
  props: {
    movieDetails: Object
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

.card-body{
  position: relative;
}


.text-container{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  background-color: rgba(0, 0, 0, 0.548);
}

.card-body:hover .text-container {
  display: block;
  overflow: auto;
  
}

</style>