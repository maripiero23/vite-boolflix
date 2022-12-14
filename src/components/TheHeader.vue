<template>
    <section>
        <div class="container">
            <h1 class="text-center text-danger">Boolflix</h1>
            <div class="row justify-content-center">
                <div class="col-3">
                    <form >
                        <input type="text" class="form-control" v-model="store.searchText">
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-primary mt-2 mb-3 sm" @click="onSearchClick">Cerca</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
import {store, fetchMovies} from '../store'  //, fetchSeriesTv inserire le chiamate serietv
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
            console.log("click");
            this.$emit("search", this.searchText)  

            // fetchMovies() 
            //fetchSeriesTv()
        }

    }

}
</script>

<style lang="scss" scoped>
</style>