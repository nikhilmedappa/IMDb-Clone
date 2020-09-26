import React, { Component } from 'react'
import { connect } from 'react-redux';
import "./style.css"

import Spinner from "../spinner"
import MovieContainer from "../card/MovieContainer"

//material-ui components
import SearchBar from '../searchbar';

export class Home extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="home">

        <SearchBar />        
        { loading ? <Spinner /> : <MovieContainer />}
        
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
})

export default connect(mapStateToProps)(Home);
