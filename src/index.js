import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/home';
import Login from './pages/login/login';
import ViewProfile from './pages/profilepage/viewprofile';
import NotFoundPage from './pages/PageNotFound/NotFoundPage';
import { getdetailsfromuid } from './firebase';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

let userdet =
{
    profImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",// here the profile image will be stored from the backend
    postno: 10,// here the number of post will be stored from the backend
    followerno: 100,// here the number of followers will be stored from the backend
    followingno: 1000,// here the number of following will be stored from the backend
    profilename: "Username",// here the username will be stored from the backend
    friendArray: [], // here the fiends and there value from the backend will be stored
    followingArray: [], // here the following and there value from the backend will be stored
    postArray: [] // here the post and there value from the backend will be stored
};

const userposts = [
  'b2.jpeg',
  'b1.jpeg',
  'b3.jpeg',
  'b4.jpeg',
  'b5.jpeg',
  'b6.jpeg',
  'b7.jpeg',
  'b8.jpeg',
  'b2.jpeg',
  'b1.jpeg',
  'b3.jpeg',
  'b4.jpeg',
  'b5.jpeg',
  'b6.jpeg',
  'b7.jpeg',
  'b8.jpeg',
];


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/home',
    element: <Home/>,
    async action() {
      return { element: <Home /> };
    },
  },
  {
    path: '/profile',
    element: <Home/>,

  },
  {
    path: '/profile/:id',
    element: <ViewProfile userdet={userdet} userposts={userposts} />,
    async action() {
      return { element: <ViewProfile userdet={userdet} userposts={userposts} /> };
    },
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  
  
]);

// router provider is used to deffer out entry point to router variable created by createBrowserRouter
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);


