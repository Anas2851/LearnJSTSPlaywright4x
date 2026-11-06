// let a = {
//     name : "Anas"
// };

// console.log(a.name);
// console.log(a["name"]);

// let b = {status: "Active"};

// console.log(b.status);
// console.log(b["status"]);
// console.log(b);


let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000;

console.log(config);
delete config.browser;
console.log(config);


let a = 10;
let b = a;
b = 99;

console.log(a);
console.log(b);

let obj1 = {val : 10};
let obj2 = obj1;
obj2 = 99;

console.log(obj1);
console.log(obj2);