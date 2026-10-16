let a = 85;

if (a > 100 || a < 0){
    console.log("Invalid")
}
else{
    if (a > 91){
    console.log("Excellent, You passed with A grade");
}
else if(a > 80 && a <= 90) {
    console.log("Very Good");
}
else if(a > 70 && a <= 80) {
    console.log("Good");
}
else if(a > 60 && a <= 70) {
    console.log("Average");
}
else if(a > 50 && a <= 60) {
    console.log("Need Improvement");
}
else if(a > 50) {
    console.log("Bad");
}
else {
    console.log("Fail")
}}
