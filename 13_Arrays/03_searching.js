let results = ["pass","fail","pass","error","fail"];
console.log(results);

console.log(results.indexOf("fail"));
console.log(results.indexOf("Skip"));

console.log(results.lastIndexOf("fail"));

console.log(results.includes("error")); //It will give OP in boolean.


let nums = [10,20,25,30,40];

let result = nums.find(n => n>20);
console.log(result);

let index = nums.findIndex(n => n>20);
console.log(index);

let tests = ["Honda","Suzuki","Yamaha"];
console.log(tests);

for (let i=0; i < tests.length;i++){
    console.log(i,tests[i]);

}

for (let test of tests){
        console.log(test);
}