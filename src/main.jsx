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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        element: <AddJob></AddJob>
      },
      {
        path: "/postedJobs",
        element: <PostedJobs></PostedJobs>
      },
      {
        path: "/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/mybids",
        element: <MyBid></MyBid>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
