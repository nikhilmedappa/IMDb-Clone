import React, { Component }from "react";
import { signupAction } from "../../actions/userActions"
import { connect } from "react-redux";
import { Button, TextField, Container } from '@material-ui/core';

import { Link } from 'react-router-dom';


class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
    };

    handleSignin = () => {
        const { email, password } = this.state;
        if (email && password) {
            this.props.signupAction(email, password);
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

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }

    handlePassChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleRePassChange = event => {
        let x = event.target.value;
        if(x === this.state.password)
        return 
    }


    render() {
        const { user, authenticated } = this.props

        let content = "";



        content = authenticated ? <h1>Welcome {user} </h1>: (
            
            <Container maxWidth="sm" style={{margin: "20px auto", alignSelf: "center", display: "flex", flexDirection: "column"}}>
                <TextField style={{margin: "10px auto", width: 250}} id="outlined-basic" onChange={this.handleUserChange} label="Username" variant="outlined" required />
                <TextField style={{margin: "10px auto", width: 250}} type="email" id="outlined-basic" onChange={this.handleEmailChange} label="Email" variant="outlined" required />
                <TextField style={{margin: "10px auto", width: 250}} type="password" id="outlined-basic" onChange={this.handlePassChange} label="Password" variant="outlined" required />
                <TextField style={{margin: "10px auto", width: 250}} type="password" id="outlined-basic" onChange={this.handleRePassChange} label="Repeat Password" variant="outlined" required />
                <Button style={{margin: "10px auto"}} variant="outlined" color="secondary" onClick={this.handleSignin}>Sign Up</Button>
                <Link to="/signin/:id"style={{ textDecoration: 'none' }}>Sign In</Link>    
            </Container>
        )

        return (
            <div>{content}</div>
        )
    }
    
}   

const mapStateToProps = (state) => ({
    username: state.users.username,
    email: state.users.email,
    password: state.users.password,
    authenticated: state.users.authenticated
})

export default connect(
    mapStateToProps,
    {
        signupAction
    }
)(Signup);