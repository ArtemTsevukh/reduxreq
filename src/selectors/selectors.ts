import { PostState } from "../types/types";

const post = (state: PostState) => state.post.post;

const postLoading = (state: PostState) => state.post.postLoading;

export const postSelectors = {
  post,
  postLoading,
};