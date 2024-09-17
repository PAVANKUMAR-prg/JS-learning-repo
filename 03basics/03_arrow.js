const user = {
    userName : "pavan",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName}, welcome to website`)
    }

}
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let userName = "pavan"
//     console.log(this.userName)
// }
// chai()

// const chai = function chai(){
//         let userName = "pavan"
//         console.log(this.userName)
//     }

const chai = () => {
    let userName = "pavan"
    console.log(this)
}
// chai();


// const addNum = (num1,num2) => {
//      return num1+num2
// }
// console.log(addNum(5,5))

// const add = (num1,num2) => (num1+num2)

// console.log(add(10,10));

// const add = (num1,num2) => ({username:"pavan"})
// console.log(add(3,4))

  


