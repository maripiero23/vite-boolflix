<template>
    <div class="card">
        <!-- <img :src="details.image" class="card-img-top" :alt="('immagine di' + personaggio.name)"> -->
        <div class="card-body">
          <h5 class="card-title">Titolo:{{movieDetails.title}}</h5>
          <p class="card-text">Titolo originale:{{}}</p>
          <p class="card-text">Lingua originale:{{}}</p>
          <p class="card-text">Voto:{{}}</p>
          <p class="card-text"></p>
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