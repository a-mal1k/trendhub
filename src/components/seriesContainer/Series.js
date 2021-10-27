import React, {useEffect} from 'react'
import Header from '../Header'
import SubHeader from './SubHeader'
import ShowContainer from './ShowContainer'
import {useSelector, useDispatch} from 'react-redux'
import {showPopular, showTopRated, searchShows, showLatest} from '../../actions/seriesAction'

function Series() {
    const shows = useSelector(state => state.shows.searchedShows)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showPopular())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const setFetchShows =()=>{
        sessionStorage.setItem('Page', 'tv');
        return false;
        }

        return (
            <div>
            <Header searchData={(query)=>dispatch(searchShows(query))}/>
                <SubHeader 
                    mostPopular={()=>dispatch(showPopular())}
                    topRated={()=>dispatch(showTopRated())}
                    latest={()=>dispatch(showLatest())}
                />
            <ShowContainer shows={shows} setPage={setFetchShows}/>
        </div>
        )
}

export default Series
