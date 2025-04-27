import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Errorpage from './components/Errorpage/Errorpage';
import { RouterProvider } from 'react-router';
import Blogs from './components/Blogs/Blogs';
import Blog from './components/Blog/Blog';
import MoodSelection from './components/MoodSelection/MoodSelection';
import MoodDetail from './components/MoodDetail/MoodDetail';
import WriteBlog from './components/WriteBlog/WriteBlog';
import About from './components/About/About';

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
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/blog',
        element:<Blogs/>
      },
      {
        path:'/blog/:id',
        element:<Blog/>
      },
      {
        path:'/mood',
        element:<MoodSelection/>
      },
      {
        path:'/mood/:moodName',
        element:<MoodDetail/>
      
      },
      
      {
        path:'/write',
        element:<WriteBlog/>
      
      },
      
     
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
