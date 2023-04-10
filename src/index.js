import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewLocation from './Component/ViewLocation/ViewLocation';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    //   errorElement: <Errorpage />
    },
    {
        path: '/location',
        element: <ViewLocation />
    }
  ]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));
registerServiceWorker();
