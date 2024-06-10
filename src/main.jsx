import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Contact from "./routes/Contact";
import {Shop} from './routes/Shop';
import {Cap} from './components/Cap';
import App from './App';
import { SelectCap } from './routes/SelectCap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "shop/:shopId",
    element: <Cap/>,
  },
  {
    path: "seleccion-de-gorra",
    element: <SelectCap/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)

