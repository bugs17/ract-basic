import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
// import App from './App';
// import LatihanState from './LatihanState';
// import LifeCycleComponent from './LifeCycleComponent';
// import List from './List';
// import Form from './Form';
// import FetchingData from './FetchingData';
// import TodoList from './TodoList';
// import HelloComponent from './HelloComponent';
// import Button from './Button';
// import Image from './Image';
// import About from './About';
// import Home from './Home';
import Main from './Main';


  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  
      <React.StrictMode>
      {/* <App /> */}
      {/* <LatihanState /> */}
      {/* <LifeCycleComponent /> */}
      {/* <List /> */}
      {/* <Form /> */}
      {/* <FetchingData /> */}
      <BrowserRouter>    
      <Main/>
      </BrowserRouter>
      {/* <HelloComponent>Hallo ini hasil dari props children!!</HelloComponent> */}
      {/* <HelloComponent children= 'ini juga sama saja dengan yg diatas tpi kurang bagus kalau untuk isi konten element' /> */} 
      {/* <Button>Click Me!!</Button> */}
      {/* <Image /> */}

     </React.StrictMode>
    
    
  );


