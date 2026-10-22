let arr = [1,2,3];
arr[2] = 8;
console.log(arr.length);

//Add to End

arr.push(4);
arr.push(7);
console.log(arr);

const att = [15,12,14];
att[2] = 15;
console.log(att);

// To add a new value at the end we use push command
att.push(95);
console.log(att);

// To remove the last item we use pop command
att.pop();
console.log(att);

// att.push(45,85,52);
// console.log(att);
// console.log(att.length);


// To add in the beginning we use unshift command

att.unshift(0);
console.log(att);
console.log(att[2]);

//To  Remove from beginning we can shift command

att.shift();
att.shift();

console.log(att);

let nums = [10,1,2,21,17];
nums.sort();
console.log(nums);

let kep = [12.45,45,85];
console.log(kep);
console.log(kep.length);
kep.push(96);
console.log(kep);
kep.pop();
kep.pop(12.45);
console.log(kep);

kep.push(66);
console.log(kep);
