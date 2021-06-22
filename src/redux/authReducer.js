import { authAPI } from '../api'

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_IS_AUTH = 'SET-IS-AUTH';
const SET_SERVER_ERRORS = 'SET_SERVER_ERRORS'
export const setAuthData = (id, login, email) => ({ type: SET_AUTH_DATA, data: { id, login, email } })
export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth })
export const setServerErrors =(error)=> ({ type: SET_SERVER_ERRORS, error })




export const getAuthData = () => {
    return async dispatch => {
        const { data, resultCode } = await authAPI.me()

        const { id, login, email } = data;
        // console.log(data)
     
        if (resultCode === 0) {
            dispatch(setAuthData(id, login, email))
            dispatch(setIsAuth(true))

        } 


    }
}

export const login = (email, password, rememeberMe) => {
    return async dispatch => {
        const { resultCode, messages } = await authAPI.login(email, password, rememeberMe)
        const [message] = messages
        if (resultCode === 0) {
            dispatch(getAuthData())
            dispatch(setServerErrors(null))
        } else {
            dispatch(setServerErrors(message))
        }



    }



}


export const logOut = () => {
    return async dispatch => {
        const { resultCode } = await authAPI.logOut()


        if (resultCode === 0) {
            dispatch(setAuthData(null, null, null))
            dispatch(setIsAuth(false))
        } 



    }
}
const intialState = {

    id: null,
    login: null,
    email: null,
    isAuth: false,
    error: null




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
            case SET_SERVER_ERRORS:
                return {
                    ...state,
                    error: action.error
                }

        default: return state
    }


}

export default authReducer;