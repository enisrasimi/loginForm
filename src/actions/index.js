
export const emailAction = (text) => { 
    return { 
        type: 'EMAIL_ACTION', 
        payload: text
    }
}

export const passwordAction = (text) => { 
    return  {
    type : 'PASSWORD_ACTION',
    payload: text
   }
}

export const registerEmail = (text) =>  { 
    return { 
        type : 'EMAIL', 
        payload: text 
    }
}

export const registerPassword = (text) => { 
    return { 
        type : 'PASSWORD', 
        payload: text 
    }
}

export const registerName = (text) => { 
    return { 
        type: 'NAME', 
        payload: text 
    }
}

export const registerLastName = (text) => { 
    return {
        type: 'LAST_NAME', 
        payload: text 
    }
}

export const isAuthenticated = () => { 
    return { 
        type: 'IS_AUTHENTICATED',   
    }
}

export const notAuthenticated = () => { 
    return { 
        type: 'NOT_AUTHENTICATED'
    }
}