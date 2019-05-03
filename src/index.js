import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import App from '@/App';
import '@/assets/css/base.css';
import '@/assets/fonts/iconfont.css';
import ajaxConfig from '@/assets/api/ajaxConfig';

console.log('NODE_ENV', process.env.NODE_ENV);

ajaxConfig(store);
ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);