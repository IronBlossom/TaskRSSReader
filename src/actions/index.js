import * as ActionTypes from './action_types';

export const getChannels = channels => ({
    type: ActionTypes.GET_LIST_OF_RSS_CHANNELS,
    payloag: channels
});

export const fetchEntries = channelUrl => ({
    type: ActionTypes.GET_LIST_OF_ENTRIES,
    payload: channelUrl
});

export const fetchContents = feedContent => ({
    type: ActionTypes.SHOW_ENTRY_CONTENTS,
    payload: feedContent
});