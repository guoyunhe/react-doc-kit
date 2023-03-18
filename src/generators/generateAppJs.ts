import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function generateAppJs(root: string) {
  const js = `
import React from "react";
import README from "../README.md";

export function App() {
  return <README/>;
}
`;
  await writeFile(join(root, 'App.jsx'), js);
}
