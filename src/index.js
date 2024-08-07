import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1. Import from react-redux and redux
import { createStore} from 'redux';
import { Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

// 2. Create user reducer function



// 3. Combine multiple reducers


// 4. Create redux store
const store = createStore(rootReducer, composeWithDevTools());
// 5. Provice redux store to entire app


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);

