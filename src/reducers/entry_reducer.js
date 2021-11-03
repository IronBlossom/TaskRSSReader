import {
  GET_LIST_OF_ENTRIES_SUCCEEDED,
  GET_LIST_OF_ENTRIES_FAILED,
} from '../actions/action_types';
const initialState = {
  entries: null,
  favorites: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_OF_ENTRIES_SUCCEEDED:
      return {...state, entries: action.payload};
    case GET_LIST_OF_ENTRIES_FAILED:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
