var mongoose = require('mongoose')

var fs=require('fs')

var Schema=mongoose.Schema
var dataSchema=new Schema({
    qns:Array,
    ans:Array,
    uid:String,
    answered:Boolean
})

var Data=mongoose.model('dataSchema',dataSchema)
var sample=null
var input=null

fs.readFile('./data/input.txt',function (err,data) {
    if (err) {
        return console.error(err);
    }

    input=JSON.parse(data.toString())
    console.log(input)
    sample=new Data(input)
    mongoose.connect('mongodb://localhost/whatthehell')
    mongoose.set('debug',true)
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

})


module.exports={
    Data:Data,
}