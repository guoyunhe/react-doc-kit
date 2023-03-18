import { build as viteBuild } from 'vite';
import { makeViteConfig } from '../config/makeViteConfig';
import { generate } from '../generators/generate';

export async function build() {
  const config = await makeViteConfig();
  await generate(config.root!);
  await viteBuild({
    ...config,
    configFile: false,
  });
}
