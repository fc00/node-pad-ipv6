var countColons = function (x) {
    var n = 0;
    x.replace(/:/g, function (c) { n++; });
    return n;
};

var padIPv6 = function (ip) {
    return ip
    .replace(/::/, function (two) {
        return ':' + Array(5-countColons(two)).fill('0000').join(':') + ':';
    })
    .split(':')
    .map(function (x) {
        return Array(4-x.length).fill('0').join("") + x;
    })
    .join(':')
    .replace(/^.*$/, function (all) {
        while (all.length < 39) { all += ":0000"; }
        return all;
    });
};

module.exports = padIPv6;
