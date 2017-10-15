const fs     = require('fs')
const path   = require('path')
const marked = require('marked')
const target = path.join(__dirname, process.argv[2])
const bs     = require('browser-sync').create('markdown')

let template = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
  
			body {
				box-sizing: border-box;
				min-width: 200px;
				max-width: 980px;
				margin: 0 auto;
				padding: 45px;
			}
		
  
  {{style}}</style>
</head>
<body class="markdown-body">
{{content}}
</body>
</html>`

const htmlPath = target.replace(path.extname(target), '.html')
bs.init({
  server: {
    baseDir: path.dirname(target),
    serveStaticOptions: {
      extensions: ["html"],
    },
    index: path.basename(htmlPath)
  }
});


marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})
fs.watchFile(target,{interval:100}, (curr, prev) => {
  if (curr.mtime === prev.mtime) {
    return false
  }

  fs.readFile(target, 'utf8', (err, content) => {
    let html       = marked(content)
    const style = fs.readFileSync('./vs.css')
    html        = template.replace('{{content}}', html).replace('{{style}}', style)
    fs.writeFileSync(htmlPath, html)
    bs.reload()
  })
})