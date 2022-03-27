import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import AppRoute from "AppRoute";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};

export default App;
