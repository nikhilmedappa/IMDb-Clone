
import { ADD_WATCHLIST, FETCH_WATCHLIST, REMOVE_WATCHLIST, LOADING } from "./types"


export const addWatchlist = movie => ({
    type: ADD_WATCHLIST,
    payload: movie
})

export const fetchWatchlist = user => ({
    type: FETCH_WATCHLIST,
    payload: user
})

export const removeWatchlist = user => ({
    type: REMOVE_WATCHLIST,
    payload: user
})

export const setLoading = () =>  {
    return {
        type: LOADING,
    }
}