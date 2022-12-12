import {reactive} from "vue";
import axios from "axios"

export const store = reactive({
    filmList: [],
    serieList: []
    
})

export function fetchFilm(){
    axios.get("https://api.themoviedb.org/3/movie/550")
    .then(resp=>{

        store.filmList
    
    })

}

export function fetchSerie(){
    
}
