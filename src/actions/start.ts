import { createServer } from 'vite';
import { makeViteConfig } from '../config/makeViteConfig';

export async function start({ port = 3333 }) {
  const config = await makeViteConfig();
  const server = await createServer({
    ...config,
    configFile: false,
    server: {
      host: true,
      port,
      open: true,
    },
  });
  await server.listen();

  server.printUrls();
}
