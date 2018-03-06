import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'core/reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  const STORAGE_KEY = 'react-url-shortener';
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (!preloadedState && savedState) {
    preloadedState = JSON.parse(savedState);
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  store.subscribe(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
  });

  return store;
}
