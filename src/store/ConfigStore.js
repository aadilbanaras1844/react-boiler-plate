

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducers } from 'store';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    combineReducers({
        ...reducers
    }),
    {}, // initial state
    composeEnhancers(
      applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
    )
  );
}



// for production
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from '../reducers';
// import initialState from './initialState';

// export default function configureStore() {
//   return createStore(rootReducer, initialState, applyMiddleware(thunk));
// }