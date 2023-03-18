import { readFile } from 'fs/promises';
import { basename } from 'path';

const titleRegex = /^#\s+(.+)/g;

export async function parseTitle(filePath: string) {
  const content = await readFile(filePath, 'utf-8');
  const match = titleRegex.exec(content);
  return match?.[1] || basename(filePath);
}
