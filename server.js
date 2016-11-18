var express = require('express')
var app = express()

// bodyを受け取る準備
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 静的ファイル
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.get('/app.js', function (req, res) {
  res.sendFile(__dirname + "/app.js")
})

app.get('/app.css', function (req, res) {
  res.sendFile(__dirname + "/app.css")
})


// ajax部分
var todo = [];

app.get('/todo', function (req, res) {
  res.send(todo)
})

app.post('/todo', function (req, res) {
  var newitem = {text: req.body.text, id: todo.length}
  todo.push(newitem)
  res.send(newitem)
})


// サーバー起動
app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})
