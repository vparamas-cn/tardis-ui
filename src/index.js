import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorker from './serviceWorker';
import createStore from './store'

const storeParams = createStore();

ReactDOM.render(
  <Provider store={storeParams.store} >
    <PersistGate loading={null} persistor={storeParams.persistor}>
      <Suspense fallback={<div>loading..</div>}>
        <StrictMode>
          <App />
        </StrictMode>
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
