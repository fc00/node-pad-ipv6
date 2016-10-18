var pad = require("./index");

var testIP = "fe80:685::ff:fe72:c4fa";

var countColons = function (x) {
    var n = 0;
    x.replace(/:/g, function (c) { n++; });
    return n;
};

var shouldEqual = "fe80:0000:0000:0000:4685:00ff:fe72:c4fa";

var padded = pad(testIP);

if (countColons(padded) !== 7) { throw new Error("Expected more colons"); }
if (padded.length !== 39) { throw new Error("Expected a 39 character IP"); }

console.log({
    input: testIP,
    inputLength: testIP.length,
    inputColons: countColons(testIP),
    output: padded,
    outputLength: padded.length,
    outputColons: countColons(padded),
});

