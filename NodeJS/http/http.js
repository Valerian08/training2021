var http = require("http");
var server = http.createServer((req,res)=>{
    res.write("Hello World");
    res.end();
})
server.listen(5000);
console.log("http server is running on port 5000.")