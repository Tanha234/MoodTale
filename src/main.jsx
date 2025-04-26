import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Errorpage from './components/Errorpage/Errorpage';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Home />,
       
      },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
