import { mkdir, rm } from 'fs/promises';
import { generateAppJs } from './generateAppJs';
import { generateEntryHtml } from './generateEntryHtml';
import { generateEntryJs } from './generateEntryJs';

export async function generate() {
  await rm('.parcel-docs', { recursive: true, force: true });
  await mkdir('.parcel-docs');
  await Promise.all([generateEntryHtml(), generateEntryJs(), generateAppJs()]);
}
