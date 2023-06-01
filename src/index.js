import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//theme
// import "primereact/resources/themes/bootstrap4-light-blue/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

