import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import 'babel-polyfill';
import App from "./components/App.jsx";
import routing from "./routes";
import configureStore from './store/configureStore';
import './assets/css/main.css';

const history = createBrowserHistory();
const store = configureStore();
const root = document.getElementById("root");

const renderToDOM = () => {
    if (root !== null) {
        ReactDOM.render(
            <Provider store={store}>
                <App history={history}>
                    {routing}
                </App>
            </Provider>, root
        );
    }
}

renderToDOM();
export default renderToDOM;
