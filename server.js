const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Main page");
  } else if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Users page");
  } else if (req.url === "/products") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Products page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Страница не найдена");
  }
});

server.listen(3000, () => {
  console.log("Сервер запущен http://localhost:3000");
});
