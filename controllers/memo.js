const Memo = require('../models/memo');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.memo_create = function (req, res, next) {
    let memo = new Memo(
        {
            title: req.body.title,
            content: req.body.content,
            color: req.body.color,
            createBy: req.body.userName
        }
    );
    memo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('memo Created successfully')
    })
};

// exports.memo_details = function (req, res, next) {
//     Memo.findById(req.params.id, function (err, memo) {
//         if (err) return next(err);
//         res.send(memo);
//     })
// };

exports.memo_update = function (req, res, next) {
    Memo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, memo) {
        if (err) return next(err);
        res.send('memo udpated.');
    });
};

exports.memo_delete = function (req, res, next) {
    Memo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.memo_getAll = function(req, res, next){
    Memo.find((err, docs) => {
        if (!err) {
             res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Catalog :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}