\     ��    {�J��{�J��{�J��{�J��                        F U N D I N G _ 1 . y m l     �   `        E     module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = A