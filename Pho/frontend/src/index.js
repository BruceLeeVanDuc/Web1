//# File khởi động React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);