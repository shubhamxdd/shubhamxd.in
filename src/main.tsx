import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initAnalytics, trackEvent } from './lib/analytics'

// Initialize PostHog and other analytics
initAnalytics();

// Log initial site visit
trackEvent('Site Visit', { 
  userAgent: navigator.userAgent,
  language: navigator.language,
  referrer: document.referrer || 'Direct'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
