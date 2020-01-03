let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let dashboard = require('./dashboard.js')
let network = require('./network.js')
let app = express();        //实例化express

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
var dataObj = Object.assign(dashboard,network)
for(let i in dataObj){
    let item = dataObj[i];
    app.all(item.url, function(req, res) {
          res.json(item.data);
    });
}
app.listen('3000', () => {
    console.log('监听端口 3000')
})