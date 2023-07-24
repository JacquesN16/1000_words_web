import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/route.ts";
import Main from "./pages/02_Main/Main.tsx";
import Word from "./pages/03_Word/Word.tsx";

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <App/>,
    },
    {
        path: routes.main,
        element: <Main/>,
    },
    {
        path: routes.word,
        element: <Word/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
