const importInfo = require("./information");

const cowsay = require("cowsay");

// console.log(cowsay.say(importInfo));

console.log(cowsay.say({
    text : importInfo.name + importInfo.campus,
    e : "oO",
    T : "U "
}));

