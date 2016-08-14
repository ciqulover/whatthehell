var mongoose = require('mongoose')
var data=require('./dataBase')
mongoose.connect('mongodb://localhost/whatthehell')
mongoose.set('debug',true)
var Schema=mongoose.Schema
var dataSchema=new Schema({
    qns:Array,
    ans:Array,
    uid:String,
    answered:Boolean
})

var Data=mongoose.model('dataSchema',dataSchema)
var sample=new Data(data)

var db = mongoose.connection
db.on('error', function () {
    console.log('error')
})
db.once('open', function () {
    console.log('opened')
    Data.find(null,function (err,doc) {
        if(!doc[0]){
            sample.save(function (err) {
                if(err)return console.log(err)
            })
        }
    })
})

module.exports={
    Data:Data,
}