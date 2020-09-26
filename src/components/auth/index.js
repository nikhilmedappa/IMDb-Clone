import React, { Component }from "react";
import {loginAction} from "../../actions/userActions"
import { connect } from "react-redux";
import { Button, TextField, Container } from '@material-ui/core';
import { Link } from 'react-router-dom'


class Auth extends Component {
    state = {
        username: "",
        password: "",
    };

    handleSignin = () => {
        const { username, password } = this.state;
        if (username && password) {
            this.props.loginAction(username);
            console.log("Login Success")
        } else {
            console.error("Login Failed")
        }
    }

    handleUserChange = event => {
        this.setState({
            username: event.target.value
        });
    }

    handlePassChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onAuth(this.props.username, this.props.password)
    }

    render() {
        const { username, authenticated } = this.props

        let content = "";



        content = authenticated ? <h1>Welcome {username} </h1>: (
            
            <Container maxWidth="sm" style={{margin: "20px auto", alignSelf: "center", display: "flex", flexDirection: "column"}}>
                <TextField style={{margin: "10px auto", width: 250}} id="outlined-basic" onChange={this.handleUserChange} label="Username" variant="outlined" required/>
                <TextField style={{margin: "10px auto", width: 250}} type="password" id="outlined-basic" onChange={this.handlePassChange} label="Password" variant="outlined" required />
                <Button style={{margin: "10px auto"}} variant="outlined" color="secondary" onClick={this.handleSubmit}>Sign In</Button> 
                <Link to="/signup"style={{ textDecoration: 'none' }}>Sign Up</Link>

            </Container>
        )

        return (
            <div>{content}</div>
        )
    }
    
}   

const mapStateToProps = (state) => ({
    username: state.users.username,
    authenticated: state.users.authenticated
})



export default connect(
    mapStateToProps,
    {
        loginAction
    }
)(Auth);