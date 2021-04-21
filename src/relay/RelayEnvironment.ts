import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";
import fetchGraphQL from "../graphql/fetchGraphQL";

function fetchRelay<T>(params: RequestParameters, variables: Variables): Promise<T> {
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
