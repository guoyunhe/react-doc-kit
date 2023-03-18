import { writeFile } from 'fs/promises';

export async function generateEntryHtml() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<title></title>
</head>
<body>
<div id="root"></div>
<script type="module" src="index.jsx"></script>
</body>
</html>
`;
  await writeFile('.parcel-docs/index.html', html);
}
