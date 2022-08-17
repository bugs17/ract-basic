import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App';
import LatihanState from './LatihanState';
import LifeCycleComponent from './LifeCycleComponent';
import List from './List';
import Form from './Form';
import FetchingData from './FetchingData';


  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  
      <React.StrictMode>
      {/* <App /> */}
      {/* <LatihanState /> */}
      {/* <LifeCycleComponent /> */}
      {/* <List /> */}
      {/* <Form /> */}
      <FetchingData />

    </React.StrictMode>
    
    
  );


