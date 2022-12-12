import { PostsState } from "../types/types";

const posts = (state: PostsState) => state.posts.posts;

const postsLoading = (state: PostsState) => state.posts.postsLoading;

export const postsSelectors = {
  posts,
  postsLoading,
};