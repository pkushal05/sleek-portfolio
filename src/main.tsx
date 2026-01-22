// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/layouts/ThemeProvider.tsx";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
// import Stairs from '@/components/core/Stairs.tsx'

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <BrowserRouter>
        <ToastProvider>
            <AnchoredToastProvider>
                <ThemeProvider>
                    {/* <Stairs> */}
                    <App />
                    {/* </Stairs> */}
                </ThemeProvider>
            </AnchoredToastProvider>
        </ToastProvider>
    </BrowserRouter>,
);
