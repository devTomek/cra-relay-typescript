import {
  loadQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from "react-relay";
import RelayEnvironment from "./relay/RelayEnvironment";
import graphql from "babel-plugin-relay/macro";
import { Suspense } from "react";
import { AppQuery } from "./__generated__/AppQuery.graphql";

const RepositoryQuery = graphql`
  query AppQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

const preloadedQuery = loadQuery<AppQuery>(RelayEnvironment, RepositoryQuery, {});

function InnerApp() {
  const {repository} = usePreloadedQuery(RepositoryQuery, preloadedQuery);

  return <pre>{JSON.stringify(repository, null, 2)}</pre>;
}

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback="Loading...">
        <InnerApp />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
