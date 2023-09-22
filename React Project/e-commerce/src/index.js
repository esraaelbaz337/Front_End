import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import LandingPage from './E-Commerce_Page/Landing_Page';
import AboutPage from './E-Commerce_Page/About_Page';
import RegistrationPage from './E-Commerce_Page/Registration_Page';
import ProductsPage from './E-Commerce_Page/Products_Page';
import CartPage from './E-Commerce_Page/Cart_Page';
import MustSignUpPage from './E-Commerce_Page/Must_SignUp_Page';
import UserProfilePage from './E-Commerce_Page/User_Profile_Page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage/>,
    errorElement: 
    <div 
      style={{ margin: 200, textAlign: "center"}}>
      <h1>Sorry This Page <br/> Not Work, Please <br/> Try Again.</h1>
    </div>
  },

  {
    path: "/Landing_Page",
    element: <LandingPage/>,
  },

  {
    path: "/About_Page",
    element: <AboutPage/>,
  },

  {
    path: "/Registration_Page",
    element: <RegistrationPage/>,
  },

  {
    path: "/Products_Page",
    element: <ProductsPage/>,
  },

  {
    path: "/Cart_Page",
    element: <CartPage/>,
  },

  {
    path: "/Must_SignUp_Page",
    element: <MustSignUpPage/>,
  },

  {
    path: "/User_Profile_Page",
    element: <UserProfilePage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals