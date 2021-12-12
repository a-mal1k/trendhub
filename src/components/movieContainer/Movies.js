import React, {useEffect} from 'react'

import Header from '../Header';
import SubHeader from './SubHeader';
import MovieContainer from './MovieContainer'
import {useSelector, useDispatch} from 'react-redux'
import {mostPopular, upcoming, topRated, kidsPopular, nowPlaying, searchMovies} from '../../actions/movieActions'

function Movies() {
    const movies = useSelector(state=>state.movies.searchedMovies);
    const  dispatch = useDispatch();

    const setFetchMovies =()=>{
        sessionStorage.setItem('Page', 'movie');
        return false;
        }

    useEffect(() => {
        dispatch(upcoming())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
      
    return (
        <div>
        <Header searchData={(query)=>dispatch(searchMovies(query))}/>
            <SubHeader 
                mostPopular={()=>dispatch(mostPopular())}
                upcoming={()=>dispatch(upcoming())}
                topRated={()=>dispatch(topRated())}
                kidsPopular={()=>dispatch(kidsPopular())}
                nowPlaying={()=>dispatch(nowPlaying())}
            />
        <MovieContainer movies={movies} setPage={setFetchMovies}/>
    
    </div>
    )
}

export default Movies
  
   