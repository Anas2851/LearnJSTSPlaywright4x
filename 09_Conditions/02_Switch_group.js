let club = "chelsea";

switch (club){
    case "Real Madrid":
    case "Real betis":
    case "Sevilla":
    case "FC Barcelona":
        console.log(club, "is a Spanish club");
        break;
    case "chelsea":
    case " Liverpool":
    case "Notingham":
    case "City":
        console.log(club, "is a English club")
        break;
    case "Bayern":
        console.log(club, "is a German club");
        break;
    case "Roma":
        console.log(club, "is a Italian club");
        break;
    case "Miami":
        console.log(club, "is a American club");
        break;
    default:
        console.log(club, "is a Rest of the world ");

}


// If we dont add break after case of condition then all the rest of the code will be executed so alway remember to add break after each condition.


let day = 5

switch (day){
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    case 7:
        console.log("Sunday");
}
