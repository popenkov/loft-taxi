import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './rootReducer';

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: reducers,
    preloadedState: initialState,
  });
};
