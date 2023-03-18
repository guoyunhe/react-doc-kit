import glob from 'fast-glob';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function generateAppJs(root: string) {
  const theme = '../theme';
  const basename = '/';
  const mdFiles = await glob(['*.md', 'docs/**/*.md', 'src/**/*.md']);
  const js = `
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "${theme}";

const pages = [];
${mdFiles
  .map(
    (file, index) => `
import Doc${index} from "${file}";
pages.push(Doc${index});

const routes = [];
const router = createBrowserRouter(routes, { basename: '${basename}' });
`
  )
  .join('\n')}

export function App() {
  return <RouterProvider router={router} />;
}
`;
  await writeFile(join(root, 'App.jsx'), js);
}
