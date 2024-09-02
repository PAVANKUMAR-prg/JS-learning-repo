
const mySym = Symbol("123");
const JsUser = {
    name :"Pavan",
    "fullName" : "Kumar",
    [mySym] : "Hello",
    age : 20,
    gmail : "Pavan555@gmail.com",
    location : "DVG",
    isLoggedIn: false

}
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function()
{
    console.log(`Hello JS user ${this.name}`);
    
}
JsUser.greeting();
JsUser.greetingTwo();






