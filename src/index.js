import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
// import registerServiceWorker from './registerServiceWorker';
import './styles/main.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
