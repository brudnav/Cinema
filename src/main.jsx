import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home"
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import Reservation from "./pages/Reservation/Reservation"
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/movie-detail",
        element: <MovieDetail />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
