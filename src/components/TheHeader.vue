<template>
    <section>
        <div class="container">
            <h1 class="text-center">Boolflix</h1>
            <div class="row justify-content-center">
                <div class="col-6">
                    <form @submit.prevent="onSearchClick">
                        <input type="text" class="form-control" v-model="store.searchText">
                        <button type="button" class="btn btn-primary">Cerca</button>
                    </form>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
import {store, fetchMovies} from '../store'  //, fetchSeriesTv inserire le chiamate
import axios from "axios"
export default{
    contents: {store},
    data(){
        return{
            store,
            //searchText: "" posso non metterlo perchè l'ho messo in storejs sopra allora: store.searchText

        }
    },
    methods: {
        onSearchClick(){
            this.$emit("searc", this.searchText)  //con l'emit, poi toglila e usa lo store
            fetchMovies()
            //fetchSeriesTv()
        }

    }
}
</script>

<style lang="scss" scoped>
</style>