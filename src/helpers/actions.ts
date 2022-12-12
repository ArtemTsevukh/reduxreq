import { postsApi } from '../post';
import { AppDispatch } from '../store/store';

import { postsSlice } from './slice';

export const getPosts = () => async (dispatch: AppDispatch) => {
  dispatch(postsSlice.actions.processGetPosts());
  console.log('effee')
  try {
    const { data } = await postsApi.getPosts();

    dispatch(postsSlice.actions.getPostsSuccess(data));
  } catch {
    dispatch(postsSlice.actions.getPostsFailure());
  }
};