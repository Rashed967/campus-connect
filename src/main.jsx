import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes/Routes';
import theme from './assets/theme/theme'
import { ThemeProvider } from 'styled-components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
   <RouterProvider router={router} />
    </ThemeProvider>
  
  </React.StrictMode>,
)
