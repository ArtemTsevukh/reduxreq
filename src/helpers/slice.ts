import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Posts } from '../types/posts';

import { PostsSlice } from '../types/types';

const initialState: PostsSlice = {
  posts: [],
  postsLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    processGetPosts: state => {
      state.postsLoading = true;
    },
    getPostsSuccess: (state, action: PayloadAction<Posts[]>) => {
      state.posts = action.payload;
      state.postsLoading = false;
    },
    getPostsFailure: state => {
      state.postsLoading = false;
    },
  },
});
