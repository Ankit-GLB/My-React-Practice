// import React and ReactDOM packages 
import App from './app.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
// get reference for the element with ID root
const el = document.getElementById('root');
// get control over the element
const root = ReactDOM.createRoot(el);
// create a react component
// show component on the screen
root.render(<App />);