import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import reducers from "./reducers";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  // Choose compose method depending upon environment and platform
  const composeEnhancers =
    typeof window === "object" ? composeWithDevTools : compose;

  const store = createStore(reducers, composeEnhancers(...enhancers));

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
