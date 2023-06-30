// main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Root from '@/routes'
import { GlobalProvider } from '@/contexts/MainContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalProvider>
      <Root />
    </GlobalProvider>
  </BrowserRouter>
)