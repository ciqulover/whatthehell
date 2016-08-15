var express = require('express');
var router = express.Router();
var db=require('./db')
var fs=require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  next()
});
router.post('/',function (req,res,next) {
  db.Data.find(null, function (err, doc) {
    if (err) {
      return console.log(err)
    } else if (doc) {
      console.log(doc)
      res.send(doc)
    }
  })
})
router.post('/save',function (req,res,next) {
  console.log(req.body)
  db.Data.findByIdAndUpdate(req.body.id,{
    qns:req.body.qns,
    ans:req.body.ans
  },function () {
    
  })
  var output=JSON.stringify(req.body,['qns','ans','uid','answered'],4)
  fs.writeFile('./data/output.txt',output,function (err,data) {
    if (err) {
      return console.error(err);
    }
  })
  res.send('ok')
})



module.exports = router;
