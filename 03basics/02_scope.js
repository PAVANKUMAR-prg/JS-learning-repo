let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

//mainly we need to understand how datatypes works in js 
//there are three types
// var 
// let 
// const

//using var is not suitable because it doesn't works on scope.
//also we have block and global scope need to keep that in mind.

function one(){
    const userName="Pavan"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    two()
}
one() 

//on note-we can just create function directly using function keyword
//and another we can also assign function directly to variable 