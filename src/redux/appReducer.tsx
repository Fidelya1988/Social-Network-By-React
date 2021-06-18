// @
import { getAuthData } from "./authReducer";

const INITIALASED_SUCCESS = 'INITIALASED__SUCCESS';
export const intialasedSucces = () => ({ type: INITIALASED_SUCCESS })
export const initialaseApp = () => {
    return (dispatch: any) => {
        const promise = dispatch(getAuthData());
        Promise.all([promise])
            .then(() => dispatch(intialasedSucces()))

    }
}

interface AppState {
    initialased: boolean
}

interface AppActionObj {
    type: string
}
const initialState: AppState = {
    initialased: false
}

const appReducer = (state = initialState, action: AppActionObj) => {
    switch (action.type) {
        case INITIALASED_SUCCESS:
            return {
                ...state,
                initialased: true
            }
        default: return state
    }

}

export default appReducer