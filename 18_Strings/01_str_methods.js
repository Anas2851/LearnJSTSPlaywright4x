// // String methods are built-in functions to manipulate a string

// // * str.touppercase()
// // * str.tolowercase()
// // * str.trim()  Removes whitespaces

// // str.slice(start,end) // returns part of string
// // str1.concat(str2) // joins str2 with str1
// // str.replace(searchval,newval)
// //str.charat(idx)



// let a = "anasshaikh";
// b = a.toUpperCase();
// console.log(b);

// let c = "ANAS shaikh";

// let g = c.slice(1,20);
// console.log(g);
// console.log(c.toLocaleLowerCase());


// let str1 = "Anas";
// let str2 = "Shaikh";

// let str3  =str2.concat(str1);
// console.log(str3);

// str4 = str2.replace("S","s");

// console.log(str4);
// console.log(str4.concat(str1));


const prompt  = require("prompt-sync")();

let name = prompt("Enter your full name ");

username  = `Your new username is "@${name}${name.length}"`

console.log(username);