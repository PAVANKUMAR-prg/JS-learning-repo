let score = undefined
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber))
//console.log(valueInNumber)

//"33" = 33
//"33abc" = nan
//true = 1; false = 0;

let isLoggedIn = 0;
let booleanValue = Boolean(isLoggedIn)
//console.log(booleanValue);

//This is all about conversioning from one type to other 


//operation -------------------------------

// operations are like making addition , substraction like things ,
//while we doing them neeed to carefull what will happens

//Also mind need to write readable code that's it about operations 

//--------------------DataTypes-------------------------------------
/*Two types of DataTypes mainly
primitive and non primitive(reference types)
*/
//Primitive types are- Number string Boolean Symbol, Null , Undefined BigInt

const id = Symbol('1234')
const tempId = Symbol('1234')
console.log(id === tempId)
;


//Non primitive types are Array, Object and Function
let arr = [1,2,3,4]
let add = function()
{
    console.log("Heloo world");
    
}
let exampleObj = {
    name:"Pavan",
    Age:20
}


console.log(arr);
console.log(typeof arr);
console.log(typeof add);
console.log(typeof exampleObj);



  


