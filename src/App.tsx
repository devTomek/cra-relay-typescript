import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import Spinner from "./components/Spinner";
import RelayEnvironment from "./relay/RelayEnvironment";
import Router from "./routes/Router";

const App = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
