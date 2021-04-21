import graphql from "babel-plugin-relay/macro";
import { loadQuery, usePreloadedQuery } from "react-relay";
import RelayEnvironment from "../../relay/RelayEnvironment";
import Page from "../components/page/Page";
import Post from "./Post";
import { PostsPageQuery } from "./__generated__/PostsPageQuery.graphql";

const postsQuery = graphql`
  query PostsPageQuery($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        ...Post_post
      }
    }
  }
`;

const preloadedPostsQuery = loadQuery<PostsPageQuery>(
  RelayEnvironment,
  postsQuery,
  {
    options: {
      paginate: {
        limit: 10,
      },
      search: {
        q: "",
      },
    },
  }
);

const PostsPage = () => {
  const data = usePreloadedQuery<PostsPageQuery>(
    postsQuery,
    preloadedPostsQuery
  );
  if (!data || !data.posts || !data.posts.data || data.posts.data.length === 0)
    return null;

  return (
    <Page>
      {data.posts.data.map((post) => (
        <Post key={post!.id} post={post!} />
      ))}
    </Page>
  );
};

export default PostsPage;
