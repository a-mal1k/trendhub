import React, {useEffect} from 'react'

import Header from './Header';
import SubHeader from './SubHeader';
import MovieContainer from './MovieContainer'
import $ from "jquery";
import {useSelector, useDispatch} from 'react-redux'
import {mostPopular, upcoming, topRated, kidsPopular, nowPlaying, searchMovies} from '../actions/movieActions'

function Movies() {
    const movies = useSelector(state=>state.movies.searchedMovies);
    const  dispatch = useDispatch();

    const setFetchMovies =()=>{
        sessionStorage.setItem('Page', 'movie');
        return false;
        }
    const  setActive = () => {
        $('.list li').on('click', ()=>{
          $('.list .active').removeClass('active');
          $(this).addClass('active');
        }) 
  }

    useEffect(() => {
        dispatch(upcoming())
        setActive()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
      
    return (
        <div>
        <Header searchData={()=>dispatch(searchMovies())}/>
            <SubHeader 
                mostPopular={()=>dispatch(mostPopular())}
                upcoming={()=>dispatch(upcoming())}
                topRated={()=>dispatch(topRated())}
                kidsPopular={()=>dispatch(kidsPopular())}
                nowPlaying={()=>dispatch(nowPlaying())}
                setActive={setActive}
            />
        <MovieContainer movies={movies} setPage={setFetchMovies}/>

    </div>
    )
}

export default Movies
  
   