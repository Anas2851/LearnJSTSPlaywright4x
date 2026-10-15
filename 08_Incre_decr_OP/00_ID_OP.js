// Pre increment

let s = 100;
console.log(s++ + ++s + s++ + ++s);    // 101 + 102 + 103+ 104
console.log(s);

let h = 37;
console.log(--h + h--);   // 36 + 35
console.log(h);

let p = 5;
let o = p-- - --p;  //  o = 5 - 3
console.log(o, p);
console.log(o);
console.log(p);

let a = 10;

console.log( ++a + a);
console.log(a);

let c = 10;


console.log(++c + c +c++);  // ++10 = 11 + 11 + 11++ = 33

console.log(c); // 12


let i = 1;

let result = i++ + ++i;  // 1 ++ + 3 = 4
console.log(result); // 4
console.log(i); //3