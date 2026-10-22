// Map
//
let scores = [40,50,70,82,56,12];

let grades = scores.map(i => i>=50 ? "Pass" : "Fail");
console.log(grades);

//Filter

let pasing = scores.filter(s => s > 60);
console.log(pasing);

let numbers = [15,12,14,25];

let fit = numbers.map(i => i >15 ? "Passing" : "Fail");
console.log(fit);

let fil = numbers.filter(c=> c>20);
console.log(fil);