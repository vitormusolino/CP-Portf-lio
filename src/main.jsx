import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import ConteudoPrincipal from './Components/ConteudoPrincipal/ConteudoPrincipal.jsx';

import App from './App.jsx'
import Projetos from './Pages/Projetos.jsx'
import PageNotFound from './Pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index:true, element: <ConteudoPrincipal/>},
      {path: "/projetos", element: <Projetos/>},
      {path: "*", element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
 )
 
