import {combineReducers} from 'redux';

import channelReducer from './channel_reducer';
import entryReducer from './entry_reducer';
import contentReducer from './content_reducer';

export default combineReducers({
    channel: channelReducer,
    entry: entryReducer,
    content: contentReducer
})