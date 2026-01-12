import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/components/core/ThemeProvider.tsx'
import Stairs from '@/components/core/Stairs.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Stairs>
          <App />
        </Stairs>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
