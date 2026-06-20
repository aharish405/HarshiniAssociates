import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'save-icon-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/save-icon' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                const { name, dataUrl } = JSON.parse(body);
                const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
                const buffer = Buffer.from(base64Data, 'base64');
                const filePath = path.resolve('public', name);
                
                // Write file to public/ directory
                fs.writeFileSync(filePath, buffer);
                console.log(`\x1b[32m✓ PWA Icon Saved: public/${name}\x1b[0m`);
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
              } catch (err) {
                console.error('Error saving PWA icon:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
})
