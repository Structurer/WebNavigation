addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>4321.run-愿美好如期而至</title>
    </head>
    <body>

      <h1>4321.run</h1>
      
      
      <a href="https://www.Google.com" > Google </a>
      <br>
      <a href="https://www.youtube.com" > YouTube </a>
      <br>
      <a href="https://chat.openai.com" > chatGPT </a>
      <br>
      <a href="https://www.wikipedia.org" > wikipedia </a>
      <br>
      

      <br>
      <a href="https://www.bilibili.com" > bilibili </a>
      <br>
      <a href="https://www.baidu.com" > baidu </a>
      <br>
      <a href="https://www.zhihu.com" > zhihu </a>
      <br>
      <a href="https://weread.qq.com" > WeRead </a>

    </body>
    </html>
  `;

  return new Response(htmlContent, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
