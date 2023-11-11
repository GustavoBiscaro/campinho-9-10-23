import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';

// páginas
import Home from "./rotas/Home";


import './index.css';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
  
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
