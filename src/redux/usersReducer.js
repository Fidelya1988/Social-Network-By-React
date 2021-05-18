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
        {
            id: 1, followed: true, fullname: 'Volodymyr K', status: 'My life is good', location: { city: 'Kyiv', country: 'Ukraine' },
            img: 'https://forum.survarium.com/ru/images/avatars/gallery/personnages/avatar1.jpg',
        },
        {
            id: 2, followed: false, fullname: 'Valeria Marchenko', status: 'I love music', location: { city: 'Kyiv', country: 'Ukraine' },
            img: 'https://image.freepik.com/free-vector/illustration-of-young-woman-meditating_23-2148513213.jpg'
        },
        {
            id: 3, followed: false, fullname: 'Stasya Synko <3', status: 'Hi!!', location: { city: 'Kyiv', country: 'Ukraine' },
            img: 'https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg'
        }
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