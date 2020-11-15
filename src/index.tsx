import "./styles/style.scss";
import * as React from "react";
import { render } from "react-dom";
import Router from "../src/routes";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const rootElement: HTMLElement = document.getElementById("root");
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <Router />
    </Provider>, rootElement);
