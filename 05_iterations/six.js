//onst coding  = ["c","java","c#","js","go"]

// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item;
    
// })
// console.log(value);

//const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num>4
// } )
//if you want to do this in foreach lets see

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      yearPublished: 1960,
      genre: "Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      yearPublished: 1949,
      genre: "Dystopian"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      yearPublished: 1925,
      genre: "Classic"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      yearPublished: 1951,
      genre: "Classic"
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      yearPublished: 1851,
      genre: "Adventure"
    }
  ];
let userBooks = books.filter((bk)=> bk.genre == 'Classic')
userBooks = books.filter((bk) => bk.yearPublished == 1951)
// console.log(userBooks);

//Lets discus about map----------------------------------------- 
  
//const myNums = [1,2,3,4,5,6,7,8,9,10]

//const x = myNums.map((num) => num + 10 )
//chaining process
//const newNums = myNums.map((num)=> num * 10).filter((num)=>num < 50);

//console.log(newNums);


// -----------reduce---------------
//here we will get two things  accumulator and current value(value of the array)
const myNums = [1,2,3,4]

// const myTotal = myNums.reduce((acc,curval)=>{
//     console.log(`Acc:${acc} - Curval:${curval}`);
    
//     return acc + curval
// },2)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Datascience",
        price : 999
    },
    {
        itemName : "Js",
        price : 1999
    },
    {
        itemName : "cybersecurity",
        price : 3999
    }
]


const finalPrice = shoppingCart.reduce((accumulator,item)=>{
    return accumulator+ item.price
},1)

console.log(finalPrice);




