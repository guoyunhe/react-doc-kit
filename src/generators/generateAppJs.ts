import glob from 'fast-glob';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { parseTitle } from '../parsers/parseTitle';

export async function generateAppJs(root: string) {
  const theme = '../theme';
  const basename = '/';
  const mdFiles = await glob(['*.md', 'docs/**/*.md', 'src/**/*.md']);
  const routes = await Promise.all(
    mdFiles.map(async (filePath) => {
      const title = await parseTitle(filePath);
      return {
        title,
        filePath,
      };
    })
  );
  const js = `
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [];
${routes
  .map(
    ({ filePath, title }, index) => `
import Doc${index} from "../${filePath}";
routes.push({ path: "/${filePath}", title: "${title}", element: <Doc${index}/> });
`
  )
  .join('\n')}

const router = createBrowserRouter(routes, { basename: '${basename}' });

export function App() {
  return <div><RouterProvider router={router} /></div>;
}
`;
  await writeFile(join(root, 'App.jsx'), js);
}
