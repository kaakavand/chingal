import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css'
import Router from './router/Router';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router/>
    </React.StrictMode>
  </QueryClientProvider>
);