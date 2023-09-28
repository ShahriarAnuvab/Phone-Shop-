import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import Favourites from './Components/Favourites/Favourites';
import Login from './Components/Login/Login';
import PhoneDetails from './Components/Home/PhoneDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children :[
      {
        path: "/",
        loader : ()=> fetch('../phones.json'),
        element: <Home></Home>
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "phones/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader : ()=> fetch('../phones.json'),
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
