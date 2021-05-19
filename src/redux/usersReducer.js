const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export const followAC = userID => ({
    type: FOLLOW,
    id: userID
});

export const unfollowAC = userID => ({
    type: UNFOLLOW,
    id: userID
})

export const setUsersAC = users => ({
    type: SET_USERS,
    users: users
})

let intialState = {
    users: [
       
    ]
}

const usersReducer = (state = intialState, action) => {
    switch (action.type) {
       
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: false
                        }

                    }
                    return user
                })

            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
            case SET_USERS: 
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}

export default usersReducer