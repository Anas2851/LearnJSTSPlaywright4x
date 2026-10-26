function add(a,b,c){
    return a+b+c;
}

let m = add(10,5,4);
console.log(m);

function getstatus(code){
    if(code >= 200 && code<=300){
        return "Success";
    }else if(code>=400 && code<500){
        return "CLient error";
    }else if(code>=500){
        return "Server error";
    }else{
        return "unknown";
    }
}

console.log(getstatus(200));
console.log(getstatus(404));
console.log(getstatus(500));
console.log(getstatus(100));



var a = 10;
console.log(a);
function printhello(){
    console.log("Hello, everyone");
    var a = 20;
    console.log(a);
    if(true){
        var a = 30;
        console.log(a);
    }
    console.log(a);
}

printhello()


let b = 20;
console.log(b);

function printhello(){
    console.log("Hello, everyone");
    let b = 30;
    console.log(b);
    if(true){
        let b = 5;
        console.log(b);
    }
    console.log(b);
}

printhello()



const a2 = 10;
console.log(a2);
function printhello(){
    console.log("Hello, everyone");
    const a2 = 20;
    console.log(a2);
    if(true){
        const a2 = 30;
        console.log(a2);
    }
    console.log(a2);
}

printhello()