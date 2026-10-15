let a = 10;

let b = --a;  //--10 = 9

console.log(b); //9
console.log(a); //9

let c = 10;

let d = c--;   //10-- = d= 9

console.log(d); //10
console.log(c); //9

let w = 10;
let f = w++ + --w  //10++ + --10 = 10
console.log(f);
console.log(w);


let v = 10;
let z = ++v - --v  //++10 - --10 = 11 - 10 = z = 1
console.log(z); //1
console.log(v); //10
