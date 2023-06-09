import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function generateEntryJs(root: string) {
  const js = `
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
`;
  await writeFile(join(root, 'index.jsx'), js);
}
