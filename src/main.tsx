import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/route.ts";
import Main from "./components/02_Main/Main.tsx";
import Word from "./components/03_Word/Word.tsx";

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
