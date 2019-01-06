import { combineReducers } from 'redux';

const INITIAL_STATE = {
  repositories: []
};

const gitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_REPOSITORIES" :
        let { repositories } = state;
        repositories = action.payload;
        const newState = {repositories};
        return newState;
    default:
        return state
  }
};

export default combineReducers({
  git: gitReducer,
});