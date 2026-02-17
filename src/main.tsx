import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster 
      position="top-center"
      toastOptions={{
        style: {
          background: '#1e293b',
          color: '#fff',
          border: '1px solid rgba(147, 51, 234, 0.3)',
        },
      }}
    />
  </StrictMode>,
)
