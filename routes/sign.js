var express = require('express');
var router = express.Router();
var setPass = require('../utils/pass')
var commonRes = require('../utils/commonRes')

/* GET home page. */
router.get('/', function (req, res, next) {
  var querySign = req.query.sign
  try {
    var sign = setPass(querySign)
    res.json(Object.assign({}, commonRes.successRes, {
      data: sign
    }));
  } catch (error) {
    res.json(Object.assign({}, commonRes.errorRes, {
      data: ''
    }))
  }
});

module.exports = router;
