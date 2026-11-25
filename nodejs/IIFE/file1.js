// let a = 10;
// let a = 20; //! invalid re-declare

//> this can be achieve using IIFE
(() => {
    let a = 10;
    console.log(a);
})();

(() => {
    let b = 10;
    console.log(b);
})();
