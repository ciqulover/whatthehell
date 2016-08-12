var express = require('express');
var router = express.Router();
var db=require('./db')

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

})



module.exports = router;
