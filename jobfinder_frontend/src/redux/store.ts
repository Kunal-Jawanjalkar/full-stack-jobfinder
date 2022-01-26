import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import companyReducer from './companySlice';
import userReducer from './userSlice';
const saga = createSagaMiddleware();
import rootSaga from './sagas/rootsaga';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    user: userReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
