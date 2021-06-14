import { authAPI } from '../api'

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_IS_AUTH = 'SET-IS-AUTH';
export const setAuthData = (id, login, email) => ({ type: SET_AUTH_DATA, data: { id, login, email } })
export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth })

export const getAuthData = () => {
    return async dispatch => {
        const { data, resultCode } = await authAPI.me()

        const { id, login, email } = data;
        console.log(data)
        if (resultCode == 0) {
            dispatch(setAuthData(id, login, email))
            dispatch(setIsAuth(true))
        }



    }
}

export const login = (email, password, remindMe) => {
    return async dispatch => {
        const {resultCode } = await authAPI.login(email, password, remindMe)

     
        if (resultCode === 0) {
            getAuthData()
        }



    }
}
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