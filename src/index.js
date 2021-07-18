import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('print-world'));