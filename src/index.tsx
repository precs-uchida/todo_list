import React from "react";
import ReactDOM from "react-dom";
import App from "./components/containers/AppContainer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/reducers/AppReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./components/sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
