import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: 360,
    width: 240,
  },
}));

export default function WatchlistCard(props) {
  const classes = useStyles();
  const { movie } = props;
    
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {movie.Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {movie.Genre}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {movie.Released}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {movie.Rated}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {movie.Director}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={movie.Poster}
        title={movie.Title}
      />
    </Card>
  );
}