var fs = require("fs");
const ap = "\nThis text is appended and displayed in a new line.";

console.log("\nBefore appending:",fs.readFileSync("append.txt","utf-8"));

fs.appendFile("append.txt",ap,'utf-8',err => {
    if(err) {
        console.error(err);
    }
    else{
        console.log("\nAfter appending:",fs.readFileSync("append.txt","utf-8"));
    }
})
const s = require('./sub.js');
const r =s.sub(30,10);
console.log("Subtraction of 10 by 30 is:",r);

