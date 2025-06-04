const http = require("node:http")


const server = http.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/") {
        res.write("Welcom To Home :)")
        res.end()
    } else if (req.method == "GET" && req.url == "/posts") {
        res.write("Welcom To Posts :)")
        res.end()
    }else if (req.method == "GET" && req.url == "/users") {
        res.write("Welcom To Users :)")
        res.end()
    }
});

server.listen(3000, () => {
    console.log("Server Run In Port 3000")
})