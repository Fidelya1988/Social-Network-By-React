import { profileAPI } from '../api'

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET-USER-PROFILE';

const SET_STATUS_MESSAGE = 'SET-STATUS-MESSAGE'
const DELETE_POST = 'DELETE_POST'
export const addPost = (newPost) => ({ type: ADD_POST, newPost });
export const deletePost = id => ({ type: DELETE_POST, id });
export const setUserProfileInfo = (userProfileInfo) => ({ type: SET_USER_PROFILE, userProfileInfo });

export const setStatusMessage = (status) => ({ type: SET_STATUS_MESSAGE, status })

export const getUserProfileInfo = (userId) => {
    return async dispatch => {
        const data = await profileAPI.getUserProfile(userId);

        dispatch(setUserProfileInfo(data));



    }
}

export const getStatus = (userId) => {
    return async  dispatch => {
      const {data} = await profileAPI.getStatus(userId)
            return dispatch(setStatusMessage(data))
       
    }
}

export const updateStatus = (status) => {
    return async dispatch => {
     const {data} = await profileAPI.updateStatus(status)
     if (data.resultCode === 0) return dispatch(setStatusMessage(status))
   
    }
}

let initialState = (

    {
        statusMessage: '',
        userProfileInfo: null,


        postData: [
            { id: 1, message: 'Hey, how are you?', likeCounts: 20 },
            { id: 2, message: 'Tell me about your dream', likeCounts: 50 },

        ]
    }
)


const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfileInfo: action.userProfileInfo
            }
        case SET_STATUS_MESSAGE:
            return {
                ...state,
                statusMessage: action.status
            }
        case ADD_POST:

            let newPost = {
                id: state.postData.length + 1,
                message: action.newPost,
                likeCounts: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost]


            }

        case DELETE_POST:

            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.id)

            }


        default: return state;
    }
}


export default profileReducer;