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
  
      <style>
        body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
      
      
          h1 {
              color: #333;
          }
  
          a {
              text-decoration: none;
              color: #0066cc;
              font-weight: bold;
          }
  
          a:hover {
              color: #ff3300;
          }
  
      </style>
  </head>

  <body>
  
      <h1>4321.run</h1>
  
      <div style="display: flex; justify-content: space-between; width: 62%;">
        <a href="https://www.Google.com"> Google </a>
        <a href="https://www.youtube.com"> YouTube </a>
        <a href="https://chat.openai.com"> chatGPT </a>
        <a href="https://www.wikipedia.org"> Wikipedia </a>
      </div>

      <div style="display: flex; justify-content: space-between; width: 62%;">
        <a href="https://www.bilibili.com" > bilibili </a>
        <a href="https://www.baidu.com" > baidu </a>
        <a href="https://www.zhihu.com" > zhihu </a>
        <a href="https://weread.qq.com" > WeRead </a>
      </div>
   </div>

  </body>
  </html>
  
  `;

  return new Response(htmlContent, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
