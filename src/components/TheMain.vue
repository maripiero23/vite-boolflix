<template>
    <section>
        <div class="container">
            <h3>Films</h3>

            <div class="container">

                <div class="row gap-4 mb-3 section">

                    <SingleCard v-for="(movie, movieIndex) in store.movies" :key="movieIndex" :movieDetails="movie">
                    </SingleCard>

                </div>


                <h3>SerieTV</h3>


                <div class="row gap-4 section">


                    <SingleCard v-for="(serie, serieIndex) in store.series" :key="serieIndex" :movieDetails="serie">
                    </SingleCard>


                </div>

            </div>



        </div>

        
    </section>

</template>

<script>

import SingleCardSeries from './SingleCardSeries.vue'
import SingleCard from './SingleCard.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from '../store'
import axios from "axios"
export default {
    components: { SingleCard, SingleCardSeries },
    data() {
        return {
            store,

        }
    },

}
</script>

<style lang="scss" scoped>

.section{
  overflow: auto;
  height: 330px;
}

</style>