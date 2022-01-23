import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import companyReducer from './companySlice';
const saga = createSagaMiddleware();
import rootSaga from './companysaga';
export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
