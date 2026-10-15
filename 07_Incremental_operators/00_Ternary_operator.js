let age = 21;

let can_i_vote = age >18 ?  "Yes" : "No";

console.log(can_i_vote);

let day = "Monday";

let Today = day === "Sunday" ? "Today is sunday" : "Today is monday";

console.log(Today)

let responseTIme = 850;

let sla = 1000;

let slaStatus = responseTIme <= sla ? "Within SLA" : "SLA breached";

console.log(`Response: ${responseTIme}ms - ${slaStatus}`);


let w = 19;

let can_i = w > 15 ? "Enjoy": "No Enjoy";

console.log(can_i)
console.log(`The condiotion for can i is: ${can_i}`)