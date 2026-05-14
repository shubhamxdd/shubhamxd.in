import posthog from 'posthog-js';

// Initialize PostHog
export const initAnalytics = () => {
  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST;

  if (key && host && key !== 'your_posthog_project_api_key') {
    posthog.init(key, {
      api_host: host,
      autocapture: true,
      capture_pageview: true,
    });
  }
};

// Telegram Logging via Proxy (Secures Token/ChatID)
export const logToTelegram = async (message: string) => {
  try {
    // We call our own API route instead of Telegram directly
    // This keeps the Bot Token and Chat ID hidden on the server
    const response = await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      // Fail silently in production, log error in dev
      if (import.meta.env.DEV) {
        console.error('Failed to send Telegram message via proxy');
      }
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Error logging to Telegram:', error);
    }
  }
};

// Unified tracking function
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // PostHog (Public Key - Safe for client)
  posthog.capture(eventName, properties);

  // Telegram (Proxied - Safe)
  const propsString = properties ? `\nDetails: ${JSON.stringify(properties, null, 2)}` : '';
  logToTelegram(`<b>Event:</b> ${eventName}${propsString}`);
};
