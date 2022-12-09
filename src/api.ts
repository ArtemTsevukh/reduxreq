import axios from "axios";

export const onboardingApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});
