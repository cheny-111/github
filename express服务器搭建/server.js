//引入一个express
const express=require('express')
//用express创建一个应用对象
const app=express()
//处理请求
app.get('/',(request,response)=>{
   console.log('/',request.query);
   response.send('/get获得的数据')
})
 app.get('/abc',(request,response)=>{
    console.log('/abc-get',request.query);
    response.send('/abc.get获得的数据')
   
 })


 app.post('/abc',(request,response)=>{
    console.log('/abc-post',request.query);
    response.send('/abc.post获得的数据')
 })
//开启一个服务器
app.listen(5001,(err)=>{
    if(err)console.log("服务器启动失败",err);
    else console.log("服务器启动成功");
})