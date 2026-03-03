import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './src/index.css'
import App from './src/App.jsx'
import { RouterProvider } from 'react-router/dom'
import {router} from "./src/router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
