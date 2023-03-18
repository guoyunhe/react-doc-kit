import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function generateAppJs(root: string) {
  const js = `
import React from "react";

export function App() {
  return <h1>Hello world!</h1>;
}
`;
  await writeFile(join(root, 'App.jsx'), js);
}
