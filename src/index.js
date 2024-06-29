import React from 'react';  // Import React
import ReactDOM from 'react-dom/client';  // Import ReactDOM for rendering
import './index.css';  // Import global CSS
import App from './App';  // Import the main App component
import reportWebVitals from './reportWebVitals';  // Import reportWebVitals for measuring performance

// Find the root element in your HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https:/s/bit.ly/CRA-vitals
// Optionally start measuring performance
reportWebVitals();