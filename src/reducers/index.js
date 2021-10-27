import {combineReducers} from 'redux'
import movieReducer from './movieReducer'
import showReducer from './showReducer'




export default combineReducers({
    movies: movieReducer,
    shows: showReducer
})