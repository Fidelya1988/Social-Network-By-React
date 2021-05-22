const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

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
export const setCurrentPageAC = currentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setTotalCountAC = totalCount => ({
    type: SET_TOTAL_COUNT,
     totalCount: totalCount
})

let intialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1
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
                users: action.users
            }
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.currentPage
                }
                case SET_TOTAL_COUNT:
                return {
                    ...state,
                    totalCount: action.totalCount
                }
        default:
            return state
    }

}

export default usersReducer