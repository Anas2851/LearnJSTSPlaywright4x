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
 const prompt = require('prompt-sync')();
 let n = prompt("Enter your number")

for (let i = 1; i <= n; i ++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FIzzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}