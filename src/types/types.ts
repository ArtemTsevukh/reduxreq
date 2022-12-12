import { Posts } from "./posts";

export interface PostsState {
  posts: PostsSlice;
}

export interface PostsSlice {
  posts: Posts[];
  postsLoading: boolean;
}