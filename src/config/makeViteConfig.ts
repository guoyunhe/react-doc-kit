import react from '@vitejs/plugin-react-swc';
import type { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { readPackageJson } from './readPackageJson';

export async function makeViteConfig(): Promise<UserConfig> {
  const packageJson = await readPackageJson();
  return {
    base: './', // for GitHub pages
    root: '.doc-kit',
    build: {
      outDir: '.doc-kit/dist',
    },
    define: {
      PACKAGE_NAME: `"${packageJson.name}"`,
      PACKAGE_VERSION: `"${packageJson.version}"`,
    },
    plugins: [react({ tsDecorators: true }), tsconfigPaths()],
  };
}
