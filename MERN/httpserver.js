const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.StatusCode = 200;
    res.setHeader("Content-Type", "text/html")
    res.end("<h1> This is CodeWithSumit");
})
server.listen(port, () => {
    console.log("Server is listening on port ${port}");  
})