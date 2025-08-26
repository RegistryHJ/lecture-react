import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './main.css';
import IndexPage from './pages';
import AboutPage from './pages/about';
import ContentsPage from './pages/contents';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        { path: '/', element: <IndexPage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/contents', element: <ContentsPage /> },
      ])}
    />
  </StrictMode>,
);
