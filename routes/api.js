var express = require('express');
var router = express.Router();
const requireAuth = require('../middlewares/require_authentication');

router.use('/user', require('./user'));
router.use('/memo', require('./memo'));
module.exports = router;