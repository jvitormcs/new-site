import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './Global'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QuemSomos from './screens/QuemSomos';

const router = createBrowserRouter([
  {
    path: "/teste",
    element: <QuemSomos />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider/>
    <App />
  </React.StrictMode>
)
