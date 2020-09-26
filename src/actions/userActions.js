
import { LOGIN, LOGOUT, SIGNUP } from "./types"
import Axios from "axios"


export const loginAction = (username, password) => dispatch => dispatch({
    type: LOGIN,
    payload: {username, password}
})

export const signupAction = (username, email, password) => 
{return dispatch => {
    const authData = {
        username: username,
        email: email,
        password: password
    }
    Axios.post('https://localhost:3300/api/user/signup', authData)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
    }
}

