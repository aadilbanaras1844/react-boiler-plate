
import { 
  LOADING_LIST_START, LOADING_LIST_END,
} from './types';
import { LeadsApi } from 'apis';


export const fetchLeads = () => {
    return async (dispatch) => {
      try {
        dispatch({type: LOADING_LIST_START});
        const { result } = await  LeadsApi.getLeads();
        dispatch({
            type: LOADING_LIST_END,
            payload: result,
        })
        
      } catch (error) {
        dispatch({
            type: LOADING_LIST_END,
            payload: [],
        })
      }
    };
};

export const addLead = (params) => {
  return async (dispatch) => {
    try {
      const { message } = await  LeadsApi.addLead(params);
      dispatch(fetchLeads());
      return message;
    } catch (error) {
      return error.message;
    }
  };
};

export const updateLead = (id, params) => {
  return async (dispatch) => {
    try {
      const { message } = await  LeadsApi.updateLead(id, params);
      dispatch(fetchLeads());
      return message;
    } catch (error) {
      return error.message;
    }
  };
};
