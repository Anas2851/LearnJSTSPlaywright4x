let apicall = new Promise(function(resolve,reject){
    resolve({status : 200});
    reject("error");
})

apicall.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})
    // }).finally(function(){
//     console.log("I will be executed anyhow");
// });

let p = new Promise(function(resolve,reject){
    resolve(42);
    reject (55);
})

p.then(function(value){
    console.log("Answer: ", value );

}).catch (function(value){
    console.log("Answer:", value);
})

let a = Promise.resolve(5);

a.then(function(val){
    return val * 10;
}).then(function(val){
    console.log("Result:", val);
})