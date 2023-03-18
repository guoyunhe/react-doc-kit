import { createServer } from 'vite';
import { makeViteConfig } from '../config/makeViteConfig';
import { generate } from '../generators/generate';

export async function start({ port = 3333 }) {
  const config = await makeViteConfig();
  await generate(config.root!);
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
