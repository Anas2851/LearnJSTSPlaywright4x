//Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both 3 and 5, print 'FizzBuzz'.
// let a = 5
// for(let i = 1;i<=10;i++){
//     console.log(a,"x",i,"=", a*i)
// }

// for (i =0;i < 20; i++){
//     if(i >= 12){
//         console.log("Play cricket");
//     }else {
//         console.log("Don't play cricket")
//     }
// }
//  const prompt = require('prompt-sync')();
//  let n =Number(prompt("Enter your number"))


// for (let i = 1; i <= n; i ++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 18; i++) {
//     if (i > 15) {
//         console.log("Can drive");
//     } else {
//         console.log("Sorry you cannot drive");
//     }
// }

// IMP: loops work on one criteria i.e (ICU) -Initialisation, Condition, Utilisation.
// While loops is called and entry loop it will start execution only wheen the condition is true.
//

let z = 1;  //Initialization

while (z <= 5) {   // Condition
    console.log("Thank you")
    z++;  // Updation
}


let age = 7;

while (true) {
    if (age > 10) {
        break;
    } else {
        console.log(age);
    }
    age++;
}



let num = 5;

while (true) {
    if (num > 8) {
        break;
    } else {
        console.log(num)
    }
    num++;
}

let u = 15;

while (u > 18) {
    break;

} console.log(u);


let retry = 0;

do {
    console.log("Executing the code");
    console.log("Retrying the code....", (retry));
    retry++;
} while (retry < 3)


let q = 10;

do {
    console.log("Thanks");
    q++;
} while (q < 10);

for (let i = 0; i < 3; i++) {
    console.log(i);
}

let v = 0;
while (v < 5) {
    v++;
}
console.log(v);

let o = 10;

do {
    console.log(o);
    o++;
} while (o < 5);


let count = 0;
for (let i = 5; i < 5; i++) {
    count++;
}
console.log(count);

let day = 2;
switch (day) {
  case 1:
    console.log("Planning");
  case 2:
    console.log("Development");
  case 3:
    console.log("Review");
  default:
    console.log("Invalid");
}

let code = "200";
switch (code) {
  case 200:
    console.log("number");
    break;
  case "200":
    console.log("string");
    break;
  default:
    console.log("no match");
}

let items = [];
if (items) {
  console.log("has items");
} else {
  console.log("empty");
}

let score = 85;
if (score >= 50) {
  console.log("pass");
} else if (score >= 80) {
  console.log("distinction");
}
