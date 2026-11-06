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