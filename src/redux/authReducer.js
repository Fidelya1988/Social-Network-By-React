const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_IS_AUTH = 'SET-IS-AUTH';
export const setAuthData = (id, login, email) => ({ type: SET_AUTH_DATA, data: {id, login, email} })
export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth })

const intialState = {
    
    id: null,
    login: null,
    email: null,
    isAuth: false

    
      
   
  
}

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state, 
                ...action.data
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }

        default: return state
    }


}

export default authReducer;