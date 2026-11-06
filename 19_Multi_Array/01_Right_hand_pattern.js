let n = 3;

for (let i = 0;i <n;i++){
    for (let j = 0; j<=i;j++){
        process.stdout.write("*");
    }
    console.log("");
}


let m = 3;

for (let i = m;i>=1;i--){
    for(let j =1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log("");
}

function test(item,callmeWhenDone){
    console.log("Hi, stat the test case", item);
    callmeWhenDone();
}


// This is asyncronised callback.....

console.log("Test 1 : Started!");

setTimeout(function(){
    console.log("Test 2 : Started!");
}, 5000);

console.log("Test 3 : Started!");