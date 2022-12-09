import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSelectors } from "./selectors/selectors";

const Posts: FC = () => {

  const post = useSelector(postSelectors.post);

  return (
    <ul></ul>
  )
}

export default Posts;
