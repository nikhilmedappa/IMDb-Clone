const initialState = {
    user: null,
    authenticated: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
                authenticated: false
            }
        case "SIGNUP":
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
            default:
            return state;
    }
}

export default reducer;