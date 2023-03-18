import { build as viteBuild } from 'vite';
import { makeViteConfig } from '../config/makeViteConfig';

export async function build() {
  const config = await makeViteConfig();
  await viteBuild({
    ...config,
    configFile: false,
  });
}
