import { BrowserRouter as BR, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "../components/NotFound";
import PostsPage from "../pages/posts/PostsPage";
import UsersPage from "../pages/users/UsersPage";

const Router = () => {
  return (
    <BR>
      <Switch>
        <Redirect exact from="/" to="/posts" />

        <Route path="/posts">
          <PostsPage />
        </Route>
        <Route path="/users">
          <UsersPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BR>
  );
};

export default Router;
