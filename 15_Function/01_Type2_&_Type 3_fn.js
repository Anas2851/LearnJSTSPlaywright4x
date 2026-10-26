// // Type 2 Functions

// // So no arguments/ parameters but with return type.

// function sayHello(){
//     return "Hello";
// }

// let m = sayHello();
// console.log(m);


// function hye(){
//     return "SayHello";

// }

// let z = hye();
// console.log(z);


// // Type 3
// // With arguments/parameters but with no return.

// function name(Name){
//     console.log("Hi",Name);
// }

// name("Anas!");
// name("Salman");
// name("Zahid");
// name("Maddy");


// // Type 4: with parameters/Arguments and also with return value.

// function sum(a,b){
//     return a+b;
// }

// let a = sum(10,5);
// console.log(a);

// console.log(sum(4,5));


// function greet(num){
//     return `Hi, ${num}`;
// }

// let b = greet(15);
// console.log(b);

// const greet1 = function(num){
//     return `Hi, ${num}`;
// }
// console.log(greet1(18));


// function arr(a){
//     return `Hello ${a}`;
// }

// let r = arr("Shaikh");
// console.log(r);

// const a1 = a => `Hello ${a}`;


function marks(num){
    if(num>70) return "Pass" ; return "Fail";
}

console.log(marks(72));
console.log(marks(52));

function maker(score){
    if(score >50) return "Good score" ;return "Bad score"
}

// console.log(maker(56));
console.log(maker(26));


function validatestatuscode(status){
    if(status>= 200 && status<=300){
        console.log("Request is fine");
    }
}

validatestatuscode(250);

const validatestatuscode1 = function(status){
    if(status>= 200 && status<300){
        console.log("Request is fine");
    }
}
validatestatuscode1(250);

const validatestatuscode2 = (status) => {
    if(status>=200 && status<=300){
        console.log("Request is fine");
    }
}

validatestatuscode2(250);