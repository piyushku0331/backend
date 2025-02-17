const http=require("http")
const server=http.createServer((request,response)=>{
    if (request.url=="/home"){
        request.writeHead()
    }
    else if(request.url)
    response.end("<h1>Server is created</h1>")
})
server.listen(4000,()=>{
    console.log("Server is started on port number 4000")
})
const {orderStatus,greet}=require("../ExportingFiles/ExportingFiles.js")
orderStatus();
greet();