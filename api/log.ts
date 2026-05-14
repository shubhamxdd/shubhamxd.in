export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const origin = req.headers.get('origin');
    const isLocalhost = origin?.includes('localhost');
    const isAuthorizedDomain = origin?.includes('shubhamxd.in') || origin?.includes('vercel.app');

    if (!isLocalhost && !isAuthorizedDomain) {
      return new Response('Forbidden', { status: 403 });
    }

    const secret = req.headers.get('x-logging-secret');
    if (secret !== process.env.LOGGING_SECRET) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { message } = await req.json();
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown';

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return new Response('Server configuration missing', { status: 500 });
    }

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `🚀 Portfolio Activity:\n${message}\n\n<b>IP:</b> ${ip}`,
        parse_mode: 'HTML',
      }),
    });

    // Return a generic response to prevent leaking Telegram chat/bot details
    return new Response(JSON.stringify({ 
      success: response.ok,
      message: response.ok ? 'Activity logged' : 'Failed to log'
    }), {
      status: response.ok ? 200 : 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
