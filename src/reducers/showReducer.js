import { FETCH_SHOW_POPULAR, FETCH_SHOW_TOP_RATED, FETCH_SHOW_SEARCH, FETCH_SHOW_LATEST } from '../actions/types'

const initialState = {
    searchedShows: []
}

const showReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHOW_POPULAR:
            return {
                ...state,
                searchedShows: action.payload
            }
        case FETCH_SHOW_TOP_RATED:
            return {
                ...state,
                searchedShows: action.payload
            }
        case FETCH_SHOW_SEARCH:
            return {
                ...state,
                searchedShows: action.payload
            }
            case FETCH_SHOW_LATEST:
            return {
                ...state,
                searchedShows: action.payload
            }
        default:
            return state;
    }
}

export default showReducer