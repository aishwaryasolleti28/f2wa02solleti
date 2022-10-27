var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  var num1= Math.abs(Math.random()*10)
  var num2= Math.abs(Math.random()*10)
  var num3= Math.abs(Math.random()*10)
  var num4= Math.abs(Math.random()*10)

  var pow = Math.pow(num1)
  var sign = Math.sign(num2)
  var tanh = Math.tanh(num3)
  var trunc = Math.trunc(num4)

  res.render('computation', { title: 'aishwarya solleti computation routes',

  num1:num1,
  num2:num2,
  num3:num3,
  num4:num4,
  pow:pow,
  sign:sign,
  tanh:tanh,
  trunc:trunc

});
});

module.exports = router;