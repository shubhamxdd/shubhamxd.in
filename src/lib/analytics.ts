import posthog from 'posthog-js';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

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

// Telegram Logging
export const logToTelegram = async (message: string) => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || TELEGRAM_BOT_TOKEN === 'your_telegram_bot_token') {
    console.log('Telegram logging skipped: Missing credentials');
    return;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `🚀 Portfolio Activity:\n${message}`,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      console.error('Failed to send Telegram message:', await response.text());
    }
  } catch (error) {
    console.error('Error logging to Telegram:', error);
  }
};

// Unified tracking function
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // PostHog
  posthog.capture(eventName, properties);

  // Telegram
  const propsString = properties ? `\nDetails: ${JSON.stringify(properties, null, 2)}` : '';
  logToTelegram(`<b>Event:</b> ${eventName}${propsString}`);
};
