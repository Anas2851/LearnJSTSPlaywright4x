// let nums = [10,1,2,21,17];
// nums.sort();
// console.log(nums);
// // Natural sorting, Lexicographic sort.

let num = [-11,-1,10,1,2,15,21];
console.log(num.sort((a,b) => a-b ));
console.log(num.sort((a,b) => b-a ));

// For sorting in alphabets it will always take the capital letter first and then it will the small character.
// For example:

let fruits = ["cherry","banana","apple","Apple","Cherry","Banana"]
fruits.sort((a,b)=> a.localeCompare(b));
console.log(fruits);