import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Success from './Success';
import Failed from './Failed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/success' element={<Success />}></Route>
      <Route path='/fail' element={<Failed />}></Route>
    </Routes>
  </BrowserRouter>
);


