<template>
    <section>
        <div class="container">
            <h3>Films</h3>
 
            <SingleCard :movieDetails="store.movies"></SingleCard>

            <h3>Series</h3>
            <SingleCardSeries :seriesDetails="store.series"></SingleCardSeries>

               
            
        </div>
    </section>

</template>

<script>

import SingleCardSeries from './SingleCardSeries.vue'
import SingleCard from './SingleCard.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
 import {store} from '../store'
import axios from "axios"
export default{
    components: {SingleCard, SingleCardSeries},
    data(){
        return{
            store,

        }
    }
}
</script>

<style lang="scss" scoped>
</style>