import React, { Component } from 'react';
import { connect } from 'react-redux'

import MovieCard from "./MovieCard";
import Grid from "@material-ui/core/Grid"


export class MovieContainer extends Component {
    render() {

        const { movies } = this.props;
        let content = "";

        content = 
            movies.Response === 'True' 
            ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
            )) 
            : null;

        return <Grid container spacing={2} justify="center" alignItems="center">{content}</Grid>
    }
    
}

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
});

export default connect(mapStateToProps)(MovieContainer);