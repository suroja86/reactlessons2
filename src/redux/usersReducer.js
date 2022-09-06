const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING='IS-FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            isFollow: !u.isFollow,
                        }
                    }
                    return u
                }) //users: [...state.users] = users: state.users.map(u=>u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.curPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUserCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.fetching}
        default:
            return state
    }
}

export const follow = (userId) =>
    ({type: FOLLOW, id: userId})

export const setUsers = (users) =>
    ({type: SET_USERS, users}) // users = users: users

export const setCurrentPage = (page) =>
    ({type: SET_CURRENT_PAGE, curPage: page})

export const setUsersTotalCount = (count) =>
    ({type: SET_USERS_TOTAL_COUNT, totalCount: count})

export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, fetching: isFetching})

export default usersReducer