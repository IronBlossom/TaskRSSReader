import {
  GET_LIST_OF_RSS_CHANNELS_SUCCEEDED,
  GET_LIST_OF_RSS_CHANNELS_FAILED,
} from '../actions/action_types';
const initialState = {
  channels: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_OF_RSS_CHANNELS_SUCCEEDED:
      return {...state, channels: action.payload};
    case GET_LIST_OF_RSS_CHANNELS_FAILED:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
