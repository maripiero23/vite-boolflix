import {reactive} from "vue";
import axios from "axios"

export const store = reactive({
    searchText: "",
    movies: [],
    series: [],
    
})

export function fetchMovies() {
    axios.get("https://api.themoviedb.org/3/search/movie" ,{
      params : {
        api_key: "1c211dbb47ccb27813db100fe206a9a2",
        query: store.searchText,
        language: it-IT
      }
    })
    .then(resp =>{
        console.log(resp.data.result);
    })
}

