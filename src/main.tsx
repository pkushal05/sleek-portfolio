import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/components/layouts/ThemeProvider.tsx'
import ScrollToTop from "@/components/core/ScrollToTop.tsx"
// import Stairs from '@/components/core/Stairs.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        {/* <Stairs> */}
          <App />
        {/* </Stairs> */}
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
