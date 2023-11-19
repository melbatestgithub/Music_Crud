import rootreducer from "./rootreducer";
import musicSaga from "./musicSaga";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sgaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootreducer,
  middleware: () => [sgaMiddleware],
});
sgaMiddleware.run(musicSaga);

export default store;
