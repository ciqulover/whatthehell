var fs =require('fs')
var data={
    qns: [
        ['男朋友出差', '男朋友出差去了'],
        ['我们家狗狗生病了', '我家狗狗生病了'],
    ],
    ans: [],
    uid:'',
    answered:false
}
data=JSON.stringify(data)
fs.readFile('./data/input.txt',function (err,data) {
    if (err) {
        return console.error(err);
    }
    var d=data.toString()
    d=JSON.parse(d)
    console.log(d.qns)

})
fs.writeFile('./data/output.txt','ss',function (err,data) {
    if (err) {
        return console.error(err);
    }
    
})

module.exports=fs