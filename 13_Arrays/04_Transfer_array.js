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

// Every VS Some

// every - ALL must pass

console.log([80,90,85].every(s => s >70));

console.log([80,75,65].every(s=> s>70));


// Some - At least one must pass

console.log([80,75,65].some(s=>s>65));