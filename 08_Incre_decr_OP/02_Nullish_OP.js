// ## Nullish Coalescing
// This operator makes sure that if the value is null, then the right-hand side value will be assigned.


let amul = null;
let val = amul ?? "NANDANI Milk";
console.log(val);


let api_response = null;
let responsedata = api_response ?? "{}";
console.log(responsedata);

let api_response1 = "Pramod";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);


let surname = null;

let fullname = surname ?? "Shaikh";
console.log(fullname);

let my = 15;
let your = my ?? "{}";

console.log(your);

console.log(typeof surname);