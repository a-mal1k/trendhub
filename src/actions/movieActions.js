import {FETCH_POPULAR, FETCH_UPCOMING, FETCH_TOP_RATED, FETCH_KIDS_POPULAR, FETCH_NOW_PLAYING, FETCH_SEARCH} from './types'
import $ from 'jquery';


const api = 'https://api.themoviedb.org/3'
const apiKey = '6c75544a6c3ee0c12e06c0346584513d'


export const mostPopular = () => dispatch => {
    const url = `${api}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_POPULAR,
        payload: movies.results
    }))
}

export const upcoming = () => dispatch => {
    $('.list .card').addClass('active');
    const url = `${api}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_UPCOMING,
        payload: movies.results
    }))
}

export const topRated = () => dispatch => {
    const url = `${api}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_TOP_RATED,
        payload: movies.results
    }))
}

export const kidsPopular = () => dispatch => {
    const url = `${api}/discover/movie?api_key=${apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_KIDS_POPULAR,
        payload: movies.results
    }))
}

export const nowPlaying = () => dispatch => {
    const url = `${api}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_NOW_PLAYING,
        payload: movies.results
    }))
}

export const searchMovies = (query) => dispatch => {
    console.log(query)
const url = `${api}/search/movie?api_key=${apiKey}&query=${query}`

if(query === ''){
    dispatch(upcoming())
  }else{
    $('.lost .active').removeClass('active');

fetch(url)
.then(response => response.json())
.then((movies) => {
  //remove error on empty string, and set movies to default upcoming
if(movies.results.error){
    dispatch(upcoming())
}else{
dispatch({
    type:FETCH_SEARCH,
    payload: movies.results
})
}
}).catch(error => console.log('Cant fetch any data', error))
  }
}