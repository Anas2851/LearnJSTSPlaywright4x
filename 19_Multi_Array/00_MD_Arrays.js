//1D array list

// let results = ["pass","fail","pass"];

// Multi dimensional arrays have rows and column.



// for (let i = 0; i<4;i++){
//     for (j = 0;j<=i; j++){
//         process.stdout.write(i,j);
//     }
// }


// process.stdout.write("Hello");
// process.stdout.write("Hey");


let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,90],
    [100,110,120]
];

console.log(grid[0][0]);

grid[0][0] = 99;

console.log(grid);
console.log(grid[0].length);
console.log(grid.length);


let testmatrix = [
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180]
];

console.log(testmatrix);
console.log(testmatrix[0][2]);
console.log(testmatrix.length);


let score = [
    [85,90,78],
    [60,45,70],
    [95,88,92]
];

let rowsSum = score.map(row => row.reduce((a,b) => a+b));

console.log(rowsSum);