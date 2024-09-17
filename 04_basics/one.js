//control flow
// const x = 21
// if(x == 20)
// {
//     console.log(`x is = 20!`);
    
// }
// else if(x > 20){
//     console.log("x is > 20");
    
// }
// else{
//     console.log(' x is < 20');
    
// }

//possible way,but not good one
    // x = 22
    // if(x == 20) console.log("Single line");
    // else if(true) console.log("Bombastichh");
    // else console.log("Else statement");

// x =1
// y = 2
// if(x == 11 | y == 2){
//     console.log("Hello");
    
// }

//one note here need to keep in mind difference between 
//&& and & or | and || is. okay
//& cheacks both codition but && cstops if first condition is false.
day = 6
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("TUE");
        break;
    case 3:
        console.log("wed");
        break;
    case 4:
        console.log("thu");
        break;

    default:
        console.log("sun");

        break;
}

// done with conditional statements thne we have

//truthy and falsy values.
//falsy values are = false,0,-0,nan,'',null,undefined...
//truthy values are = [],true,"0",{},functions(){}

//nullish coalescing operator(??): null undefined
// it assigns the value other than null or undefined
//example
let val1
//val1 = 5 ?? 10 //in this case first value

//val1 = null ?? 10
//console.log(val1);


const iceTeacPrice = 100
iceTeacPrice >= 80? console.log("Less than 80"):console.log("More than 80");
;
