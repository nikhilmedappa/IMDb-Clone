import React from 'react';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 240,
    margin: 5,
  },
  media: {
    height:360,
    width: 240,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  cardContent: {
    padding: 5
  },
  cardActions: {
    paddingTop: 0,
    paddingBottom: 10,
    marginTop: 0,
    justifyContent: 'center'
  },
  

}));



function MovieCard(props){
  const { movie } = props;
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        image={movie.Poster}
        title={movie.Title}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="subtitle1" color="textSecondary" component="p">
        {movie.Title} - {movie.Year}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.cardActions}>
        <Button style={{backgroundColor: 'black', alignSelf: 'center'}}><Link to={"/movie/" + movie.imdbID} style={{textDecoration: 'none', color: 'yellow'}}>Details</Link></Button>
      </CardActions>
    </Card>
  );  
}

export default MovieCard;