var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var memo_controller = require('../controllers/memo');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', memo_controller.test);


router.post('/create', memo_controller.memo_create);

router.get('/:id', memo_controller.memo_details);

router.put('/:id/update', memo_controller.memo_update);

router.delete('/:id/delete', memo_controller.memo_delete);


module.exports = router;