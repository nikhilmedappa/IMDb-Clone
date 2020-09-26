import React from 'react'
import "./style.css"

//react modules
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

//material-ui components
import{ makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    
    bookmarkButton: {
        color: 'yellow'
    },
    title: {
        flexGrow: 1,
        marginLeft: 100
    },
}))

const Navigation = props => {
    const classes = useStyles();

    const { authenticated } = props;

    let authStatus = '';

    authStatus = authenticated ? "Logout" : "Login"
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: 'black', height: 60}}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'yellow', margin: 'auto',}}>IMDb</Link>
                    </Typography>
                    <Button className="watchlist-btn">
                        <Link to="/watchlist/:userId" style={{ textDecoration: 'none'}}><BookmarkBorderIcon fontSize="small" className={classes.bookmarkButton} color="inherit" /></Link>
                    </Button>
                    <Button><Link to="/signin/:id" style={{ textDecoration: 'none' , color:  'yellow' }}>{authStatus}</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => ({
    authenticated: state.users.authenticated
})

export default connect(mapStateToProps)(Navigation);