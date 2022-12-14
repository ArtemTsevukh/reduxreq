import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Posts from './posts';
import { store } from './store/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Posts/>
    </Provider>
  </React.StrictMode>
);


