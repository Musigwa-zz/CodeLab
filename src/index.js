import React from "react";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { store, persist } from "./redux/store";
import AppNavigator from "./navigation";
import Await from "./components/common/Await";

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persist} loading={<Await />}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);
