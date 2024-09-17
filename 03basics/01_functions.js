//int his file let's understand about js-functions

function sayMyname()
{
    console.log("Pavankumar!");
    
}
//sayMyname();

function addNumbers(num1,num2)
{
    return num1+num2;
}
const result = addNumbers(5,4);
//console.log(result);

function loginUser(userName = "samm"){
    if(userName === undefined){
            console.log("Please enter a name!")
            return
    }
    return `${userName} jus logged in`
}
//console.log(loginUser())

function calculateCartPrice(...num1){  //rest operator
    return num1;
}
//console.log(calculateCartPrice(2,3,4))

const user ={
    userName:"pavan",
    price:200
}

function handleObject(anyObject){
    console.log(`Username ${anyObject.userName} and price is : ${anyObject.price}`);
       
}
handleObject(user);

const arr1 = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(arr1));
// console.log(returnSecondValue([100,200,300]));
