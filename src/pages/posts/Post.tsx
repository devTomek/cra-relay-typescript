import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Post_post$key } from "./__generated__/Post_post.graphql";
import Card from "../components/card/Card";

const postFragment = graphql`
  fragment Post_post on Post {
    id
    title
    body
  }
`;

interface Props {
  post: Post_post$key;
}

const Post = ({ post }: Props) => {
  const { body, title } = useFragment(postFragment, post);

  if (!title || !body) return null;

  return <Card header={title} body={body} />;
};

export default Post;
