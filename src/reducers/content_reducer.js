import {
    SHOW_ENTRY_CONTENTS_SUCCEEDED,
    SHOW_ENTRY_CONTENTS_FAILED
  
  } from '../actions/action_types'
  const initialState = {
    entries: null,
    favorites: null,
  };
  
  export default const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ENTRY_CONTENTS_SUCCEEDED:
          return{...state,action.payload};
        case SHOW_ENTRY_CONTENTS_FAILED:
          return{...state,action.payload};
      default:
        return state;
    }
  };