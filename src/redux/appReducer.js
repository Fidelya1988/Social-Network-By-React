const SET_INITIALASED = 'SET-INITIALASED';
const setIntialased =() => ({type: 'SET_INITIALASED'})

// interface StateObj {
//     initialased: boolean
// }
const initialState=  {
    initialased: false
}

const appReducer =( state=initialState, action) =>{
switch(action.type) {
    case SET_INITIALASED:
        return {
            ...state,
            initialased: true
        }
        default: return state
}
    return state
}

export default appReducer