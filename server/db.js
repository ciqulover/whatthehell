var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/whatthehell')
mongoose.set('debug',true)
var Schema=mongoose.Schema
var dataSchema=new Schema({
    qns:Array,
    ans:Array,
})

var Data=mongoose.model('dataSchema',dataSchema)
var sample=new Data({
    qns: [
        ['男朋友出差', '男朋友出差去了'],
        ['我们家狗狗生病了', '我家狗狗生病了'],
    ],
    ans: [],
})

var db = mongoose.connection
db.on('error', function () {
    console.log('error')
})
db.once('open', function () {
    console.log('opened')
    // sample.save(function (err) {
    //     if(err)return console.log(err)
    // })
})

module.exports={
    Data:Data,
}