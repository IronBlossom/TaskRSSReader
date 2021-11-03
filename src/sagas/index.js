import {takeLatest, put, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as ActionTypes from '../actions/action_types';
import {requestEntries, requestContent} from '../api';
import parse from 'rss-to-json';

function* handler() {
  yield call(getAllChannels);
  yield takeLatest(ActionTypes.GET_LIST_OF_ENTRIES, getAllEntries);
  yield takeLatest(ActionTypes.SHOW_ENTRY_CONTENTS, showEntryContent);
}

function* getAllChannels() {
  try {
    yield call(delay, 1000);
    const CHANNELS = [
      {
        name: 'CBN-Finance',
        url: 'https://www1.cbn.com/rss-cbn-news-finance.xml',
      },
      {name: 'CBN-Health', url: 'https://www1.cbn.com/rss-cbn-news-health.xml'},
      {
        name: 'CBN-Politics',
        url: 'https://www1.cbn.com/rss-cbn-news-politics.xml',
      },
    ];
    yield put({
      type: ActionTypes.GET_LIST_OF_RSS_CHANNELS_SUCCEEDED,
      payload: CHANNELS,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.GET_LIST_OF_RSS_CHANNELS_FAILED,
      payload: error,
    });
  }
}

function* getAllEntries(action) {
  try {
    const {items} = yield parse(action.payload);

    yield put({type: ActionTypes.GET_LIST_OF_ENTRIES_SUCCEEDED, payload: items});
  } catch (error) {
    yield put({type: ActionTypes.GET_LIST_OF_ENTRIES_FAILED, payload: error});
  }
}

function* showEntryContent() {}

export {handler};
