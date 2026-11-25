//- require -> used for import

// const v = require("./file1.js");
//> destructure
// const { a, b } = require("./file1.js");
//> destructure & rename
const { a: x, b: y } = require("./file1.js");

console.log(x, y);

const add = require("./utils/add.js")

console.log(add(x, y))