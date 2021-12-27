import React from "react";
import { Provider } from "react-redux";

import { AuthenticatedUserProvider } from "./AuthenticatedUserProvider";
import RootNavigator from "./RootNavigator";
import { store } from "../store";

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <Provider store={store}>
      <AuthenticatedUserProvider>
        <RootNavigator />
      </AuthenticatedUserProvider>
    </Provider>
  );
}
