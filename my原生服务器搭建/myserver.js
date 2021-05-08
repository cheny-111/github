//引入http模块，用于搭建服务器
const http=require('http')
const queryString=require("querystring")
//创建服务器对象
const server=http.createServer((a,response)=>{
   let str=a.url
   let arr=str.split("?")
   const res=queryString.parse(arr[1])
   console.log(res)
   response.setHeader('content-type',"text/html,charset=utf-8")
   response.end("hahah")
})


//开启服务器

server.listen(5000,(err)=>{
   if(err) console.log(err);
   else console.log("服务器开启成功");

   
})
