import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AddJob from './components/AddJob/AddJob.jsx';
import PostedJobs from './components/PostedJobs/PostedJobs.jsx';
import UpdateJob from './components/UpdateJob/UpdateJob.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import MyBid from './components/MyBid/MyBid.jsx';
import BidRequest from './components/BidRequest/BidRequest.jsx';
import NotFound from './components/PageNotFound/NotFound.jsx';
import PrivateRoutes from './components/Private/PrivateRoutes.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addJob",
        element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
      },
      {
        path: "/postedJobs",
        element: <PrivateRoutes><PostedJobs></PostedJobs></PrivateRoutes>
      },
      {
        path: "/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({params}) => fetch(`https://career-loom-server.vercel.app/jobs/${params.id}`)
        
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://career-loom-server.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/mybids",
        element: <PrivateRoutes><MyBid></MyBid></PrivateRoutes>
      },
      {
        path: "/bidsRequest",
        element: <PrivateRoutes><BidRequest></BidRequest></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </AuthProvider>
  </React.StrictMode>,
)
