import {profileAPI} from '../api'

const ADD_POST = 'ADD-POST';
const WRIGHT_POST = 'WRIGHT-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_CURRENT_PROFILE_PHOTO = 'SET-CURRENT-PROFILE-PHOTO';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const wrightPostActionCreator = (text) => ({ type: WRIGHT_POST, newText: text });
export const setUserProfileInfo = (userProfileInfo) => ({ type: SET_USER_PROFILE, userProfileInfo });
export const setCurrentProfilePhoto = (isProfilePhotoSmall) => ({ type: SET_CURRENT_PROFILE_PHOTO, isProfilePhotoSmall })

export const getUserProfileInfo=(userId) => {
    return async dispatch => {
      const data = await profileAPI.getUserProfile(userId);
     
            dispatch(setUserProfileInfo(data));


     
    }
}

let initialState = (

    {
        userProfileInfo: null,
        isProfilePhotoSmall: true,

        postData: [
            { id: 1, message: 'Hey, how are you?', likeCounts: 20 },
            { id: 2, message: 'Tell me about your dream', likeCounts: 50 },

        ],

        newPostText: ''
    }
)


const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfileInfo: action.userProfileInfo
            }
        case ADD_POST:

            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likeCounts: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''

            }


        case WRIGHT_POST:
            return {
                ...state,
                newPostText: action.newText


            }
            case SET_CURRENT_PROFILE_PHOTO:
            if (action.isProfilePhotoSmall)
            {
             return    {...state, 
                isProfilePhotoSmall: false
                }
             }
             if (!action.isProfilePhotoSmall)
             {
              return    {...state, 
                 isProfilePhotoSmall: true
                 }
              }

        default: return state;
    }
}


export default profileReducer;