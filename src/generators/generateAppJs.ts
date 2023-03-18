import { writeFile } from 'fs/promises';

export async function generateAppJs() {
  const js = `
import React from "react";

export function App() {
  return <h1>Hello world!</h1>;
}
`;
  await writeFile('.parcel-docs/App.jsx', js);
}
