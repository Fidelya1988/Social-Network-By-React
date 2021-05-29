const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLWING_DISABLED = 'TOGGLE-FOLLOWING-DISABLED';

export const follow = userID => ({
    type: FOLLOW,
    id: userID
});

export const unfollow = userID => ({
    type: UNFOLLOW,
    id: userID
})

export const setUsers = users => ({
    type: SET_USERS,
    users: users
})
export const setCurrentPage = currentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setTotalCount = totalCount => ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount
})

export const toggleIsFetching = isFetching => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

export const toggleFollowingDisabled = (isFetching, userId) => ({
    type: TOGGLE_FOLLWING_DISABLED, isFetching, userId
})

let intialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                            followed: true
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
                            followed: false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLWING_DISABLED:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id=>id != action.userId)]
            }

        default:
            return state
    }

}

export default usersReducer