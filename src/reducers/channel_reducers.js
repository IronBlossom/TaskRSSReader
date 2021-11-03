import {
  GET_LIST_OF_RSS_CHANNELS_SUCCEEDED,
  GET_LIST_OF_RSS_CHANNELS_FAILED,
} from '../actions/action_types';
const initialState = {
  channels: [
    {
      name: 'CBN-Finance',
      url: 'https://www1.cbn.com/rss-cbn-news-finance.xml',
    },
    {name: 'CBN-Health', url: 'https://www1.cbn.com/rss-cbn-news-health.xml'},
    {
      name: 'CBN-Politics',
      url: 'https://www1.cbn.com/rss-cbn-news-politics.xml',
    },
  ],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_OF_RSS_CHANNELS_SUCCEEDED:
      return {...state};
    case GET_LIST_OF_RSS_CHANNELS_FAILED:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
