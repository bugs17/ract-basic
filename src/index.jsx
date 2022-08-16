import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import LatihanState from './LatihanState';
import LifeCycleComponent from './LifeCycleComponent';


  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  
      <React.StrictMode>
      {/* <App /> */}
      {/* <LatihanState /> */}
      
        
      <LifeCycleComponent />
      
    </React.StrictMode>
    
    
  );


