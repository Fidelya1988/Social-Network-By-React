import usersReducer, { getUsersTC } from "./usersReducer";

const state = {
  users: [],
  pageSize: 100,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const newState = usersReducer(state,action);

it('users page must load',()=> {
const action
})