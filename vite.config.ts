import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react(), 
      tailwind(),
      {
        name: 'api-log-proxy',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/log' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const incomingSecret = req.headers['x-logging-secret'];
                  if (incomingSecret !== env.LOGGING_SECRET) {
                    res.statusCode = 401;
                    res.end(JSON.stringify({ error: 'Unauthorized' }));
                    return;
                  }

                  const { message } = JSON.parse(body);
                  const botToken = env.TELEGRAM_BOT_TOKEN;
                  const chatId = env.TELEGRAM_CHAT_ID;
                  let ip = req.socket.remoteAddress || 'Unknown';
                  if (ip === '::1') ip = '127.0.0.1 (Localhost)';

                  if (!botToken || !chatId) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Local env missing tokens' }));
                    return;
                  }

                  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      chat_id: chatId,
                      text: `🚀 Portfolio Activity (Dev):\n${message}\n\n<b>IP:</b> ${ip}`,
                      parse_mode: 'HTML',
                    }),
                  });

                  const data = await response.json();
                  res.statusCode = response.ok ? 200 : 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                } catch (e) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Internal server error' }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
