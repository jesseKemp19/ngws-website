// shared page builder
function buildPage(config) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${config.title}</title>
  <meta name="description" content="${config.desc}">
  <link rel="canonical" href="https://ngws.co.za/pages/${config.slug}.html">
  <link rel="stylesheet" href="../css/style.css">
  ${config.extraCSS || ''}
</head>
<body>
<script src="../js/components.js"><\/script>
<script>initPage('${config.active}');<\/script>
${config.body}
<script src="../js/main.js"><\/script>
</body>
</html>`;
}
