import React from 'react';
// import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import store from '../src/store';

render(
    // <Provider store={store}> 
    <App />,
    document.getElementById('root')
    // </Provider>
);
