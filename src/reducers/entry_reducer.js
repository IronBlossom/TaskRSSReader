import {
    GET_LIST_OF_ENTRIES_SUCCEEDED,
    GET_LIST_OF_ENTRIES_FAILED
  
  } from '../actions/action_types'
  const initialState = {
    entries: null,
    favorites: null,
  };
  
  export default const entryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_OF_ENTRIES_SUCCEEDED:
          return{...state,action.payload};
        case GET_LIST_OF_ENTRIES_FAILED:
          return{...state,action.payload};
      default:
        return state;
    }
  };
  