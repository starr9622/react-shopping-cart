import "./styles/style.scss";
import * as React from "react";
import { render } from "react-dom";
import Router from "../src/routes";
import { Provider } from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducers";

const rootElement: HTMLElement = document.getElementById("root");
const store = createStore(reducer);

render(
    <Provider store={store}>
        <Router />
    </Provider>, rootElement);
