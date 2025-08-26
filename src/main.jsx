import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './main.css';
import IndexPage from './pages';
import AboutPage from './pages/about';
import ContentsPage from './pages/contents';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contents' element={<ContentsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
