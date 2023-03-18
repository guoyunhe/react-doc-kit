import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import { join } from 'path';
import mdxTitle from 'rehype-mdx-title';
import frontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import mdxCodeMeta from 'remark-mdx-code-meta';
import mdxFrontmatter from 'remark-mdx-frontmatter';
import type { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { readPackageJson } from './readPackageJson';

const cached: UserConfig | null = null;

export async function makeViteConfig(): Promise<UserConfig> {
  if (cached) return cached;
  const packageJson = await readPackageJson();
  const root = '.doc-kit';
  return {
    base: './', // for GitHub pages
    root,
    build: {
      outDir: join(root, 'dist'),
    },
    define: {
      PACKAGE_NAME: `"${packageJson.name}"`,
      PACKAGE_VERSION: `"${packageJson.version}"`,
    },
    plugins: [
      mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [
          frontmatter, // YAML metadata
          mdxFrontmatter, // YAML metadata to MDX component static attributes
          gfm, // GitHub flavored Markdown, e.g. tables, footnotes, strikethrough, task lists...
          mdxCodeMeta, // e.g. ```jsx live filename="index.jsx" style={{ height: 300 }}
        ],
        rehypePlugins: [
          [mdxTitle, { name: '_title' }], // Convert `# title` to MDX component static attributes, use _ prefix to avoid conflict with frontmatter
        ],
      }),
      react({ tsDecorators: true }),
      tsconfigPaths(),
    ],
  };
}
