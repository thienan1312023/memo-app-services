var express = require('express');
const requireAuth = require('../middlewares/require_authentication');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var memo_controller = require('../controllers/memo');

router.post('/create', memo_controller.memo_create);

// router.get('/:id', memo_controller.memo_details);

router.put('/:id/update', requireAuth, memo_controller.memo_update);

router.delete('/:id/delete', memo_controller.memo_delete);

router.get('/', requireAuth, memo_controller.memo_getAll);

module.exports = router;