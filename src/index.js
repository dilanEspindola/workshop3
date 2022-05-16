import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Material Ui
// import { ThemeProvider } from '@mui/material/styles'
// import theme from './themes/Material'

import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </ThemeProvider> */}
  </Provider>
);
