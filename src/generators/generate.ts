import { mkdir, rm } from 'fs/promises';
import { generateAppJs } from './generateAppJs';
import { generateEntryHtml } from './generateEntryHtml';
import { generateEntryJs } from './generateEntryJs';

export async function generate(root: string) {
  await rm(root, { recursive: true, force: true });
  await mkdir(root);
  await Promise.all([generateEntryHtml(root), generateEntryJs(root), generateAppJs(root)]);
}
