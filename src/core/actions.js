import copy from 'copy-to-clipboard';
import { map } from 'ramda';

import {
  getShortcodeStats,
  postShorten,
} from 'core/api';


export const SHORTCODE_CREATE_START = 'SHORTCODE_CREATE_START';
export const SHORTCODE_CREATE_SUCCESS = 'SHORTCODE_CREATE_SUCCESS';
export const SHORTCODE_STAT_FETCH_START = 'SHORTCODE_STAT_FETCH_START';
export const SHORTCODE_STAT_FETCH_SUCCESS = 'SHORTCODE_STAT_FETCH_SUCCESS';
export const SHORTCODES_FETCH_START = 'SHORTCODES_FETCH_START';
export const SHORTCODES_FETCH_SUCCESS = 'SHORTCODES_FETCH_SUCCESS';

export const SHORTCODE_COPY = 'SHORTCODE_COPY';
export const SHORTCODES_CLEAR = 'SHORTCODES_CLEAR';
export const NEW_URL_CHANGE = 'NEW_URL_CHANGE';

function fetchShortcodesStart(shortcodes) {
  return {
    type: SHORTCODES_FETCH_START,
    payload: { shortcodes }
  };
}

function fetchShortcodesSuccess() {
  return {
    type: SHORTCODES_FETCH_SUCCESS,
  };
}

export function fetchShortcodes(shortcodes) {
  return dispatch => {
    dispatch(fetchShortcodesStart(shortcodes));

    return Promise.all(map((shortcode) => {
        return dispatch(fetchShortcodeStat(shortcode));
      }, shortcodes))
      .then(() => dispatch(fetchShortcodesSuccess()));
  }
}

function fetchShortcodeStatStart(shortcode) {
  return {
    type: SHORTCODE_STAT_FETCH_START,
    payload: { shortcode }
  };
}

function fetchShortcodeStatSuccess(shortcode, stats) {
  return {
    type: SHORTCODE_STAT_FETCH_SUCCESS,
    payload: { shortcode, ...stats }
  };
}

export function fetchShortcodeStat(shortcode) {
  return dispatch => {
    dispatch(fetchShortcodeStatStart(shortcode));

    return getShortcodeStats(shortcode)
      .then(stats => dispatch(fetchShortcodeStatSuccess(shortcode, stats)));
  }
}

function createShortcodeStart(url) {
  return {
    type: SHORTCODE_CREATE_START,
    payload: { url },
  };
}

function createShortcodeSuccess(shortcode, url) {
  return {
    type: SHORTCODE_CREATE_SUCCESS,
    payload: { shortcode, url }
  };
}

export function createShortcode(url) {
  return dispatch => {
    dispatch(changeNewUrl(''));
    dispatch(createShortcodeStart(url));

    return postShorten({ url })
      .then(({ shortcode }) => {
        dispatch(createShortcodeSuccess(shortcode, url));
        dispatch(fetchShortcodeStat(shortcode));
      });
  };
}


export function changeNewUrl(newUrl) {
  return {
    type: NEW_URL_CHANGE,
    payload: { newUrl },
  };
}

export function copyShortcode(shortcode, link) {
  copy(link);

  return {
    type: SHORTCODE_COPY,
    payload: { shortcode },
  }
}

export function clearShortcodes() {
  return {
    type: SHORTCODES_CLEAR,
  };
}
