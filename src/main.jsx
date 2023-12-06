import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { router } from './Routes/Route/Route'
import { Providers } from './GlobalRedux/provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <RouterProvider router={router}></RouterProvider>
  </Providers>
)





