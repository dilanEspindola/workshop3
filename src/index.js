import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Material Ui
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes/Material'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>

);
