//using constructor created object is singleton
//example object.create

//object literals - down
const mySym = Symbol("123");
const my1 = Symbol("key1")
const JsUser = {
    name :"Pavan",
    "fullName" : "Kumar",
    [mySym] : "Hello",
    [my1]:"value in symbol my1",
    age : 20,
    gmail : "Pavan555@gmail.com",
    location : "DVG",
    isLoggedIn: false

}
//console.log(JsUser["name"]);
//console.log( typeof JsUser[my1]);

//console.log(JsUser.name);
//console.log(JsUser["name"]);
//console.log(JsUser[mySym]);
//console.log(JsUser);

// using Object.freeze we can made object values not changeble
//suppose i changed
JsUser.name = 'kumar';
//console.log(JsUser);
//Object.freeze(JsUser);
//now change will not reflect.
//JsUser.name = "pavan";
//console.log(JsUser);//we will get previous value only


JsUser.greeting = function(){
    console.log("Hello Js user");
}
// JsUser.greetingTwo = function()
// {
//     console.log(`Hello JS user ${this.name}`);
    
// }
// JsUser.greeting();
// JsUser.greetingTwo();

JsUser.greetingg = function(){
    console.log("Hello js user");
}
JsUser.greetingg();

JsUser.greet = function(){
    console.log(`Hello js user ${this.name}`);
    
}
JsUser.greet();

//Note 1: we can access object using dot operator as well as 
// also we can access that using squre brackets.







