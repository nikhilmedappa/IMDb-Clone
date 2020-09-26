import React, { Component } from 'react';
import { connect } from 'react-redux'

import WatchlistCard from "./WatchlistCard";
import Grid from "@material-ui/core/Grid"


export class WatchlistContainer extends Component {
    render() {

        const { watchmovies } = this.props;
        let content = "";

        content = 
            watchmovies.Response === 'True' 
            ? watchmovies.Search.map((movie, index) => (
            <WatchlistCard key={index} movie={movie} />
            )) 
            : null;

        return <Grid container spacing={2} justify="center" alignItems="center">{content}</Grid>
    }
    
}

const mapStateToProps = (state) => ({
    watchmovies: state.watchlist.watchmovies,
});

export default connect(mapStateToProps)(WatchlistContainer);