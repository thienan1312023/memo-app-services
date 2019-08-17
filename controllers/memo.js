const memo = require('../models/memo');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.memo_create = function (req, res) {
    const memo = new memo(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    memo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('memo Created successfully')
    })
};

exports.memo_details = function (req, res) {
    memo.findById(req.params.id, function (err, memo) {
        if (err) return next(err);
        res.send(memo);
    })
};

exports.memo_update = function (req, res) {
    memo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, memo) {
        if (err) return next(err);
        res.send('memo udpated.');
    });
};

exports.memo_delete = function (req, res) {
    memo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

