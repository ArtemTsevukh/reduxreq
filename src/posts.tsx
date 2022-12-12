import { FC, useEffect } from "react";
import { getPosts } from "./helpers/actions";
import { useDispatch } from "./hooks/dispatch";
import { useSelector } from "./hooks/selector";
import { postsSelectors } from "./selectors/selectors";
import './post.css'
const Posts: FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelectors.posts);
  
  const list = posts.map((post) => 
    <li className="post">
      <div>
        {post.title}
      </div>
      <div>
        {post.body}
      </div>
    </li>
  );

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  
  return (
    <ul>
      {list}
    </ul>
  )
}

export default Posts;

