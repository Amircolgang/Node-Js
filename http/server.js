const http = require("node:http")


const server = http.createServer((req , res)=>{
    console.log(req.method)
    console.log(req.url)
    // console.log(res)
    res.write("Welcom to Node Js Server")
    res.end()
});

server.listen(3000, ()=>{
    console.log("Server Run In Port 3000")
})