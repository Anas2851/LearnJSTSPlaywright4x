
/*
undefined -> Variable exist but it is not been assigned and JS itself sets it automatically

Null -> Intentionally assigned "No value" or kept "Empty".
*/


let v;
console.log(v);

let x = null;
console.log(x);

let b;
b = 100;

console.log(b);
console.log(typeof b);

let w = null;
console.log(w);
console.log(typeof w);

w = 15;
console.log(w);
console.log(typeof w);

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/