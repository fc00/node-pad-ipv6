var pad = require("./index");


var countColons = function (x) {
    var n = 0;
    x.replace(/:/g, function (c) { n++; });
    return n;
};

//var shouldEqual = "fe80:0000:0000:0000:4685:00ff:fe72:c4fa";

[
    "fc00::",
    "fe80:685::ff:fe72:c4fa",
].forEach(function (ip) {
    var padded = pad(ip);

    console.log({
        input: ip,
        inputLength: ip.length,
        inputColons: countColons(ip),
        output: padded,
        outputLength: padded.length,
        outputColons: countColons(padded),
    });

    if (countColons(padded) !== 7) { throw new Error("Expected more colons"); }
    if (padded.length !== 39) { throw new Error("Expected a 39 character IP"); }

    console.log();
});


