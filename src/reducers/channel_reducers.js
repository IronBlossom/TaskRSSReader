import {
    GET_LIST_OF_RSS_CHANNELS_SUCCEEDED,
    GET_LIST_OF_RSS_CHANNELS_FAILED
  
  } from '../actions/action_types'
  const initialState = {
    channels: null,
  };
  
  export default const channelReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_OF_RSS_CHANNELS_SUCCEEDED:
          return{...state,action.payload};
        case GET_LIST_OF_RSS_CHANNELS_FAILED:
          return{...state,action.payload};
      default:
        return state;
    }
  };