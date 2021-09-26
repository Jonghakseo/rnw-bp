import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../sagas";
import { ENV } from "../../env";

const makeStore = () => {
  const saga = createSagaMiddleware();

  const middlewares = [saga];

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
    middleware: middlewares,
    devTools: ENV === "dev",
  });
  saga.run(rootSaga);
  return store;
};

const reduxStore = makeStore();

export default reduxStore;
