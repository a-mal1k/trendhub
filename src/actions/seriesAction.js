import {FETCH_SHOW_POPULAR, FETCH_SHOW_TOP_RATED, FETCH_SHOW_SEARCH, FETCH_SHOW_LATEST} from './types'
import $ from 'jquery';

const api = 'https://api.themoviedb.org/3'
const apiKey = '6c75544a6c3ee0c12e06c0346584513d'


export const showPopular = () => dispatch => {
    $('.list .card').addClass('active');
const url = `${api}/tv/popular?api_key=${apiKey}&language=en-US&page=1`
fetch(url)
.then(response => response.json())
.then(shows => dispatch({
    type:FETCH_SHOW_POPULAR,
    payload: shows.results
}))
}
export const showLatest = () => dispatch => {
  $('.list .card').addClass('active');
  const url = `${api}/tv/airing_today?api_key=${apiKey}`
fetch(url)
.then(response => response.json())
.then(shows => dispatch({
  type:FETCH_SHOW_LATEST,
  payload: shows.results
}))
}

export const showTopRated = () => dispatch => {
    const url = `${api}/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(shows => dispatch({
        type:FETCH_SHOW_TOP_RATED,
        payload: shows.results
    }))
  }
  export const searchShows = (query) => dispatch => {
    const url = `${api}/search/tv?api_key=${apiKey}&query=${query}`
  if(query === ''){
    dispatch(showPopular())
  }else{
     $('.list .active').removeClass('active');

  fetch(url)
  .then(response => response.json())
  .then((shows) => {
  if(shows.results.error){
     dispatch(showPopular())
  }else{
    dispatch({
        type:FETCH_SHOW_SEARCH,
        payload: shows.results
    })
  }
  }).catch(error => console.log('Cant fetch any data', error))
}
}