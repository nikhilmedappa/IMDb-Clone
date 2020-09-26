import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.css'
import { fetchWatchlist, removeWatchlist, setLoading } from "../../actions/watchlistActions"
import Spinner from "../spinner"
import WatchlistContainer from './WatchlistContainer'


export class Watchlist extends Component{
    componentDidMount(){
        this.props.fetchWatchlist(this.props.match.params.id)
        this.props.setLoading();
    }
    
    handleRemoveMovie = event => {
        this.props.removeWatchlist()
    }

    render(){
        const { loading } = this.props
        return (
            <div className="watchlist">
                {loading ? <Spinner /> : <WatchlistContainer />}
                <div className="return">
                    <Link to="/" className="return-home">Go back to Search</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.movies.loading,
})

export default connect(mapStateToProps, {
    fetchWatchlist, removeWatchlist, setLoading
})(Watchlist);