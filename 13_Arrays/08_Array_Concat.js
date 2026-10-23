let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b);
let e = a+b;
console.log(e);
console.log(c);

// Spread (modern way) - concatenation. (...)

let d = [...a,...b];
console.log(d);