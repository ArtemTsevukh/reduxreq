import { combineReducers } from '@reduxjs/toolkit';
import { postsSlice } from '../helpers/slice';

export const rootReducer = combineReducers({
    posts: postsSlice.reducer,
});
