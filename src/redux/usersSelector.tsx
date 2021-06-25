import { createSelector } from "reselect";
interface State {
  users: {
    users: [];
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: [];
  };
}

const getUsersListSelector = (state: State): [] => {
  return state.users.users;
};
export const getUsersList = createSelector(getUsersListSelector, (users) => {
  return users.filter((user) => true)
});

export const getUserspageSize = (state: State) => state.users.pageSize;
export const getUserstotalCount = (state: State) => state.users.totalCount;
export const getUsersPage = (state: State) => state.users.currentPage;
export const getUsersIsFetching = (state: State) => state.users.isFetching;
export const getFollowingInProgress = (state: State) =>
  state.users.followingInProgress;
