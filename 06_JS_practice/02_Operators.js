// Arithmatic opertors:

let a = 10;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


console.log(a); // 10

console.log(a++); // 10
console.log(a); //11
console.log(++a); // 12
console.log(--a); //11
console.log(a--); // 11

console.log(a) //10

// Assigment operators.

let c = 5;
let d = 5;
let e = 5;
let f = 5;

console.log(c += 5); //thye value for c will be  c = 5 + 5 = 10 
console.log(d -= 5); //thye value for c will be c = 5 - 5 = 0 
console.log(e *= 5); //thye value for c will be c  c = 5 * 5 = 25
console.log(f /= 5); //thye value for c will be c  c = 5 / 5 = 1


let s = 100;
console.log(s++ + ++s + s++ + ++s);    // 101 + 102 + 103+ 104
console.log(s);

let h = 37;
console.log(--h + h--);   // 36 + 35
console.log(h);

let p = 5;
let o = p-- - --p;  //  o = 5 - 3
console.log(o, p);

