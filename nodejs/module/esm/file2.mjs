//> import from default
import a from "./file1.mjs";
// console.log(a)

//> import from multiple
// import { b } from "./file3.mjs";
// console.log(b)

//> rename using 'as'
import { b as value } from "./file3.mjs";
console.log(value);

//> import function
import { add } from "./file4.mjs";
console.log(add(2, 3));
