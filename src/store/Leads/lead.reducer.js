/**
 * Reduer for user
 */

import { LOADING_LIST_START, LOADING_LIST_END, DELETE_RECORD_START, DELETE_RECORD_END, LOADING_DETAIL_START, LOADING_DETAIL_END } from './types';

const initialState = {
  loadingList: false,
  list: [],
  deletingRecord: false,
};

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_LIST_START:
      return{
          ...state,
          loadingList: true,
      }
    case LOADING_LIST_END:
        return {
            ...state,
            loadingList: false,
            list: action.payload
        }
    case LOADING_DETAIL_START:
      return{
          ...state,
          loadingDetail: true,
      }
    case LOADING_DETAIL_END:
        return {
            ...state,
            loadingDetail: false,
            detail: action.payload
        }
    case DELETE_RECORD_START:
        return{
            ...state,
            deletingRecord: true,
        }
    case DELETE_RECORD_END:
        return {
            ...state,
            deletingRecord: false
        }
    default:
      return state;
  }
};

export default ClientReducer;
