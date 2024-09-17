//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = '1234';
tinderUser.name = 'Pavan';
tinderUser.isLoggedIn = true;
tinderUser.greetings = function() {
    console.log("Hellooooo");
}
//tinderUser.greetings();
// console.log(tinderUser);

const regulerUser = {
    email :"pavan@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Pavan",
            lastName:"kumar"
        }
    }
}
//console.log(regulerUser.fullName?.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}


//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({}, obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Lets discuss about destructuring

const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hithesh"
}

//console.log(course.courseInstructor); 
//this above is one way we can access object values.

//the other way is like-->
const {courseInstructor:instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//note that json data may be in object format or also
//stored in array, objects acts as a elements of array
// {
//     "name":"pavan",
//     "courseName":"js kannada",
//     "price":"free"
// }






