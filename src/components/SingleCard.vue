<template>
    <div class="card">
        <!-- <img :src="details.image" class="card-img-top" :alt="('immagine di' + personaggio.name)"> -->
        <div class="card-body">
          <h5 class="card-title">{{details.title}}</h5>
          <p class="card-text"></p>
        </div>
      </div>

</template>

<script>
export default{
  props: {
    details: Object
  },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
</style>