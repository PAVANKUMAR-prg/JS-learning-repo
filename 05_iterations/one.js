//for loop

// for (let index = 0; index < 10; index++) 
// {
//         console.log(index);
            
// }

for (let i = 1; i < 2; i++) {
    for (let j = 1; j <= 10; j++) {
        //console.log(i + `*` + j + `=` + i*j)
    }    
}

let myArray = ['f', 'b', 's']
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
    
}

//while loop
// x =1
// while (x<10) {
//     console.log(x)
//     x++
// }

//do while loop

// i = 1;
// do {
//     console.log(i);
//     i++;
    
// } while (i<10);


// for of loop specially to work with array


const arr = [1,2,3,4,5]
 for (const num of arr) {
   //console.log(num)
 }
 const greet = "Hello world"
 for (const val of greet) {
    //console.log(val);
    
 }

 //Map

 const map = new Map()
 map.set('In','India')
 map.set('USA','America')
 map.set('FR','France')
 map.set('In','India')
//on map we can't able to iterate using either for -of or for-in
 //console.log(map);

 for (const [key,value] of map) {
    //console.log(key, value);
    
 }

 const myObj = {
    'game1' : 'for',
    'game2' : 'while',
    'game3' : 'do'
 }


//  for (const [value,key] of myObj) {
//     console.log(value,key);
//  }

for (const key in myObj) {
      //console.log(myObj[key]);
}

const programming = ['js','java','cpp']

for (const key in programming) {
   console.log(key , programming[key]);
}
//on object we need to use for-in
//on arrays we need to use for-of



//foreach loop-----------------------------------------------

const coding = ["c","java","c#","js"]
//for this loop we need pass callbackfunction. and it will doesn't have name

// coding.forEach( function (item){
//       console.log(item);
// } )

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printME(item){
//        console.log(item);
// }
// coding.forEach(printME)

coding.forEach((item, index, arr)=>{
      console.log(item,index);
})

const myCoding = [
   {
      langaugeName:"Javascript",
      LanguageFileName:"JS",
      
   },
   {
      langaugeName:"Java",
      LanguageFileName:"Java",

   },
   {
      langaugeName:"Python",
      LanguageFileName:"PY",

   }
]

myCoding.forEach((item)=>{
      console.log(item);
      
})
 


 

//  let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
