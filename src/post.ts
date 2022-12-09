import axios from "axios";
import { Post } from "./types/post";

const getPost = () => axios.get<Post>(`https://jsonplaceholder.typicode.com/posts`);

export const postApi = {
  getPost,
};
