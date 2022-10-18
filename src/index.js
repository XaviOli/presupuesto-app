import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from '../src/routes/Blog';
import Inicio from '../src/routes/Inicio';
import Contacto from '../src/routes/Contacto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='contacto' element={<Contacto />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
