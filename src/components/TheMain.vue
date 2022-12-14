<template>
    <section>
        <div class="container">
            <div class="row">

                <div class="col g-4" v-for="(film, index) in store.movies" key="index">
                    <SingleCard></SingleCard>

                </div>
            </div>
        </div>
    </section>

</template>

<script>
import AppCard from './AppCard.vue'
import SingleCard from './SingleCard.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
 import {store} from '../store'
import axios from "axios"
export default{
    component: {SingleCard, AppCard},
    data(){
        return{
            store,

        }
    }
}
</script>

<style lang="scss" scoped>
</style>