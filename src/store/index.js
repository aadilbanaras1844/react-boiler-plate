

import configureStore from './ConfigStore';

import LeadReducer from './Leads/lead.reducer';

export const reducers = {
    LeadReducer,
}


const store = configureStore();

export default store;