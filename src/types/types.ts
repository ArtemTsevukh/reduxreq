import { Post } from "./post";

export interface PostState {
  post: PostSlice;
}

export interface PostSlice {
  post: Post[];
  postLoading: boolean;
}