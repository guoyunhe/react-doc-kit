import { writeFile } from 'fs/promises';

export async function generateEntryJs() {
  const js = `
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />);
`;
  await writeFile('.parcel-docs/index.jsx', js);
}
