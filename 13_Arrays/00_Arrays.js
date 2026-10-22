const browsers
= ["Chrome","Firefox","Webkit"];
console.log(browsers);
console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers.length);


const names = ["Anas","Zahid","Salman","Asim"];
console.log(names);
console.log(names[0]);
console.log(names.at(-1));
console.log(names.length);
console.log(names.at(2));

names[2] = "Maddy";
console.log(names);
names[0] = "Salman";
console.log(names);


let score = new Array(3);
score[0] = "1";
score[1] = "2";
score[2] = "7";
console.log(score)

let test = Array.of(100,200,300,400);
console.log(test);