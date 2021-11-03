import {
  SHOW_ENTRY_CONTENTS_SUCCEEDED,
  SHOW_ENTRY_CONTENTS_FAILED,
} from '../actions/action_types';
const initialState = {
  contents: null,
  favorites: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ENTRY_CONTENTS_SUCCEEDED:
      return {...state, contents: action.payload};
    case SHOW_ENTRY_CONTENTS_FAILED:
      return {...state, error: action.payload};
    default:
      return state;
  }
};

