// // Nested ternary is used when we have multiple conditions.


let age = 29;

let able_to_drive = age > 18 ? (age >21 ? "Yes you can drive and also can get married"  : "No you cant get married but you can drive")  : "No you cannot drive";

console.log(able_to_drive);


let r = 15;

let zip = r >= 15 ? (r > 16 ? "You can go" : "No you cannot go") : "sorry you are underage";

console.log(zip)


let statusCode = 404;

let category = statusCode < 300 ? "Success": statusCode < 400 ? "Redirect": statusCode < 500 ? "Client Error" : "Server Error";

console.log(`the value of status code is ${statusCode} and the category is ${category}`);


let temp = 35;

let feel = (temp >= 40) ? "Very hot" : (temp >= 30) ? "Hot" : (temp >= 20) ? "Feels okay" : "Doesn't feel okay";

console.log(`Temprature is ${temp} , and it feels ${feel}`)


