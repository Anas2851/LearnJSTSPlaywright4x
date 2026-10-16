let month = 13;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Februrary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Input")
}

let response_code  = 404;
switch(response_code){
    case 200:
        console.log("200 Ok");
        break;
    case 404:
        console.log("404 Not Found!");
        break;
    default:
        console.log("Not Status code match");
}


let Status = 0;
console.log(typeof Status);

switch (Status){
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 Matched");
        break;

}