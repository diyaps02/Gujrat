import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './Components/Pages/Homepage';
import About from './Components/Pages/About';
import Iprmanagement from './Components/Pages/Iprmanagement';
import Signup from './Components/common/Signup';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "ipr-management",
        element: <Iprmanagement />
      },
      {
        path: "signup",
        element: <Signup />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();