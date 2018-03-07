import { map } from 'ramda'
import { combineReducers } from 'redux'

import {
  SHORTCODE_COPY,
  SHORTCODE_CREATE_SUCCESS,
  SHORTCODE_STAT_FETCH_SUCCESS,
  SHORTCODES_CLEAR,
  NEW_URL_CHANGE,
} from 'core/actions';


function shortcodes(
  state = {
    items: [],
    newUrl: '',
  },
  { type, payload }
) {
  switch (type) {
    case SHORTCODE_CREATE_SUCCESS:
      return {
          ...state,
          items: [
            { ...payload },
            ...state.items.slice(),
          ]
      };

    case SHORTCODE_STAT_FETCH_SUCCESS:
      return {
        ...state,
        items: map((item) => {
          if (item.shortcode === payload.shortcode) {
            return {
              ...item,
              ...payload,
            };
          }

          return item;
        }, state.items),
      };

    case SHORTCODE_COPY:
      return {
        ...state,
        items: map((item) => {
          return {
            copied: item.shortcode === payload.shortcode,
            ...item,
          };
        }, state.items),
      };

    case SHORTCODES_CLEAR:
      const items = [];
      return { ...state, items };

    case NEW_URL_CHANGE:
      const { newUrl } = payload;
      return { ...state, newUrl };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  shortcodes,
})

export default rootReducer;
