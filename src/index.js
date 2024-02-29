import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/home';
import Login from './pages/login/login';
import ViewProfile from './pages/profilepage/viewprofile';
import NotFoundPage from './pages/PageNotFound/NotFoundPage';
import { FirebaseProvider } from './firebase';
import "./App.css";


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <ViewProfile />,
  },
  {
    path: '/profile/:profileid',
    element: <ViewProfile />,
  },

]);

// router provider is used to deffer out entry point to router variable created by createBrowserRouter
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);


