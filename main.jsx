import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import {ArticlesProvider} from './src/context/ArticlesContext.jsx'
import {router} from "./src/router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArticlesProvider>
      <RouterProvider router={router}/>
    </ArticlesProvider>
  </StrictMode>,
)
