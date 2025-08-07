import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'

// Suppress React DevTools and UNSAFE lifecycle warnings from third-party libraries during development
if (import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' && 
      (args[0].includes('Download the React DevTools') || 
       args[0].includes('Using UNSAFE_componentWillMount') ||
       args[0].includes('ReactStrictModeWarnings'))
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
