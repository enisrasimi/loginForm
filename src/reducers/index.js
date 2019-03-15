 

const initialState = { 
    email: '', 
    isauthenticated: null,
}

export const emailReducer = (state= initialState, action )=> { 
    switch (action.type) { 
        case 'EMAIL_ACTION': 
        return {...state, email: action.payload}
        case 'IS_AUTHENTICATED': 
        return {...state, isauthenticated:true}
        case 'NOT_AUTHENTICATED': 
        return {...state, isauthenticated:null}
        default: 
        return state 
    }
}


const initialStatePass = { 
    password: ''
}
export const passwordReducer = (state = initialStatePass, action ) => { 
    switch (action.type) { 
        case 'PASSWORD_ACTION' : 
        return  {...state, password: action.payload} 
        default: 
        return state
    }
}

const initialStateRegister = { 
    name: '', 
    lastname: '', 
    email: '', 
    password: ''
}

export const registerReducer = (state = initialStateRegister, action) => { 
    switch (action.type) { 
        case 'NAME' : 
        return {...state, name: action.payload}
        case 'LAST_NAME': 
        return {...state,  lastname: action.payload}
        case 'EMAIL': 
        return {...state, email: action.payload}
        case 'PASSWORD': 
        return {...state, password: action.payload}
        default: 
        return state 
    }
}
 
