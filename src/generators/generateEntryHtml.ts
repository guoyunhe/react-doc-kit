import { writeFile } from 'fs/promises';
import { join } from 'path';
import { readPackageJson } from '../config/readPackageJson';

export async function generateEntryHtml(root: string) {
  const packageJson = await readPackageJson();
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<title>${packageJson.name}</title>
<meta name="description" content="${packageJson.description}">
</head>
<body>
<div id="root"></div>
<script type="module" src="index.jsx"></script>
</body>
</html>
`;
  await writeFile(join(root, 'index.html'), html);
}
