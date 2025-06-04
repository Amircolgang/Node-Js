const http = require("node:http")


const server = http.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/") {
        res.write("Welcom To Home :)")
        res.end()
    } else if (req.method == "GET" && req.url == "/posts") {
        res.writeHead(200 , {"Content-Type" : "application/json"})
        res.write(JSON.stringify([
            {id : 1 , title : "Amir"},
            {id : 2 , title : "Reza"},
            {id : 3 , title : "Parham"},
        ]))
        res.end()
    }else if (req.method == "GET" && req.url == "/users") {
        res.write("Welcom To Users :)")
        res.end()
    }else{
        res.write(`Mehod : ${req.url}`)
    }
    console.log(req.method)
});

server.listen(3000, () => {
    console.log("Server Run In Port 3000")
})