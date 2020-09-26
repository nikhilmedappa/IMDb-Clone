import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom"

import "./style.css"

import { fetchMovie, setLoading} from "../../actions/searchActions"
import { addWatchlist } from "../../actions/watchlistActions"
import { Button } from '@material-ui/core'

import Spinner from "../spinner"

export class Movie extends Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }
//takes in movie object to pass to the actionCreator
    handleWatchlist = event => {
        this.props.addWatchlist(this.props.movie);
    }

    handleWatchlistSignin = event => {
        return <Redirect to="/signin" />
    }
    render(){
        const { authenticated, loading, movie } = this.props;

        const watchlistbutton = authenticated ?
           this.handleWatchlist : this.handleWatchlistSignin
      

        let movieInfo = (
            <div className="container">
                <div className="poster">
                    <img src={movie.Poster} className="thumbnail" alt="Poster" />
                </div>
                <div className="desc">
                    <h3 className="movietitle">{movie.Title}</h3>
                    <ul className="desclist" style={{decoration: 'none'}}>
                        <li>Genre: {movie.Genre}</li>
                        <li>Released: {movie.Released}</li>
                        <li>Rated: {movie.Rated}</li>
                        <li>IMDB Rating: {movie.imdbRating}</li>
                        <li>Director: {movie.Director}</li>
                        <li>Writer: {movie.Writer}</li>
                        <li>Actors: {movie.Actors}</li>
                    </ul>
                    <Button onClick={this.handleWatchlist}>Add to Watchlist</Button>
                    <div className="plot-movie">
                        <h3>Plot</h3>
                        <p>{movie.Plot}</p>
                    </div>
                </div>
                <div className="return">
                    <a 
                        href={"https://www.imdb.com/title/" + movie.imdbID}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-imdb">View on IMDb</a>
                    <Link to="/" className="return-home">Go back to Search</Link>

                </div>
            </div>
        );
        
        let content = loading ? <Spinner /> : movieInfo;
        return <div>{content}</div>

    }
}

const mapStateToProps = (state) => ({
    loading: state.movies.loading,
    movie: state.movies.movie,
    authenticated: state.users.authenticated
});

export default connect(mapStateToProps, { fetchMovie, setLoading, addWatchlist })(Movie);