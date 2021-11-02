import * as ActionTypes from './action_types';

export const getChannels = channels => ({
  type: ActionTypes.GET_LIST_OF_RSS_CHANNELS,
  payloag: channels,
});


// Channel -> Entries
export const fetchEntries = channelUrl => ({
  type: ActionTypes.GET_LIST_OF_ENTRIES,
  payload: channelUrl,
});

export const onFetchEntriesSucceeded = entries => ({
  type: ActionTypes.GET_LIST_OF_ENTRIES_SUCCEEDED,
  payload: entries,
});

export const onFetchEntriesFailed = error => ({
  type: ActionTypes.GET_LIST_OF_ENTRIES_FAILED,
  payload: error,
});


// Entries -> Content
export const fetchContents = entryUrl => ({
  type: ActionTypes.SHOW_ENTRY_CONTENTS,
  payload: entryUrl,
});

export const onFetchContentsSucceeded = feedContent => ({
  type: ActionTypes.SHOW_ENTRY_CONTENTS_SUCCEEDED,
  payload: feedContent,
});

export const onFetchContentsFailed = error => ({
  type: ActionTypes.SHOW_ENTRY_CONTENTS_FAILED,
  payload: error,
});


// Entries -> Favorite
export const markAsFavorite = (url, uniqueId) => ({
    type: ActionTypes.MARK_AS_FAVORITE,
    payload: {url: url, id: uniqueId}
});

// Show Favorite list
export const showFavorite = (list=[]) => ({
    type: ActionTypes.SHOW_LIST_OF_FAVORITE,
    payload: list
});
