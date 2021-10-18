import React from "react";
import ReactDOM from "react-dom";
import App from "./components/containers/AppContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/reducers/AppReducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
