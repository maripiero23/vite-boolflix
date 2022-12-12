<template>
    <MovieSeriesFilterVue></MovieSeriesFilterVue>


</template>

<script>
import MovieSeriesFilterVue from './components/MovieSeriesFilter.vue';

import axios from "axios"
export default{
    contents: {MovieSeriesFilterVue},
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
</style>