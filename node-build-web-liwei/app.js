"use strict";

var path = require('path');
var express = require('express');
var app = express();
var port  = 4000;

// 选片系统
app.get('/serviceselect', function(req , res) {
   res.sendfile(path.join(__dirname, './serviceselect/'))
});



// 选片系统
app.get('/music', function(req , res) {
    res.contentType('text/html');
    res.write("<link ref='./public/font/style.css'/>");
    res.write("<h1 style='color:red;text-align:center;'>播放音乐</h1>");
    res.write("<script src='http://lisiyizu.github.io/js/jquery-1.11.1.min.js'></script>");
    res.write("<script src='./public/aplayer.js'></script>");
    res.write("<script src='./public/music.js?_=1474530506093'></script>");
    res.end();
});

// 根路由路由
app.get('/', function(req , res) {
    res.contentType('text/html');
    res.write("<h1 style='color:red'>项目启动成功</h1>");
    res.write("<h2 style='color:red'><a href='/music'>音乐播放</a></h2>");
    res.write("<h2 style='color:red'><a href='/serviceselect'>选片系统</a></h2>");
    res.write("<h2 style='color:red'>测试项目</h2>");
    res.end();
});

// 选片系统路径
app.use(express.static(path.join(__dirname, 'serviceselect')));
// 定位到根目录
app.use('/',express.static(path.join(__dirname, '/')));

// 开启服务
app.listen(port,function(err){
  if (err) {
    console.log(err)
    return
  }
  console.log('启动监听： http://localhost:' + port + '\n')
})