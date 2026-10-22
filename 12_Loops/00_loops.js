// let a = 5
// for(let i = 0;i<=10;i++){
//     console.log(a,"x",i,"=", a*i)
// }

// for (let i = 0;i<=20;i++){
//     if(i/3 ===0){
//         console.log("Fizz");
//     }else if (i/5 ===0){
//         console.log("Buzz");
//     }else(i/3 ===0 && i/5 ===0);{
//         console.log("FizzBuzz");
//     }
// }

// for (let i =0; i>=15;i++){
//     console.log(i)

// }

// let attempts = 0;

// while(attempts <=3){
//     console.log("Attempts:", attempts);
//     attempts++;
// }



// let i = 0
// while (i < 5) {
//     i++;
// }
// console.log(i);


// let count =0;
// for( let i = 5;i<5;i++){
//     count++;
// }
// console.log(count);


let a = 10
let b = 10
let c = 10
if(a===b && a === c && c ===b){
    console.log("Equilateral");
}else if(a === b || a ===c || b ===c){
    console.log("Isosceles");
}else {
    console.log("Scalene");
}