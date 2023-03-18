import { readFile } from 'fs/promises';

export interface PackageJson {
  name: string;
  version: string;
  description: string;
  reactDocKit?: {
    pages: [];
  };
}

const cached: PackageJson | null = null;

export async function readPackageJson() {
  if (cached) return cached;
  const raw = await readFile('package.json', 'utf-8');
  const obj: PackageJson = JSON.parse(raw);
  return obj;
}
