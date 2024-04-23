//  loops

// let x = 0

// while(x < 50) {

//   if(true) {
//     console.log('inside if else')
//   }
//   // code
//   console.log(x, 'hello')
//   x++
// }

// if(true) {
//   console.log('outside if else')
// }







// function sayHello() {
//   console.log('hello')
// }

// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()







// let userEmails = ['ayaanj10@gmail.com', 'test@gmail.com', 'Masters', 'Developer', 'New Delhi']

// for(karan of userEmails) {
//   if(karan === 'test@gmail.com') {
//     console.log('user registered with the same email found, select another email' )
//   }
// }




// let person = {
//   name: 'John',
//   education: 'Eng Hons',
//   age: '16',
//   living: 'Uttam Nagar',
// }


// for(key in person) {
//   console.log(person[key])
// }


// console.log(person.education)



// let obj = {
//   'customer Id': 'john'
// }

// console.log(obj['customer id'])




// let y = 10
// while(y > 0) {
//   console.log(y, 'hello')
//   y--
// }



// let text = 'In 1852, Levi Strauss, an immigrant from Bavaria, opened a dry goods company in San Francisco at the height of the California Gold Rush. While he was working, he recognized a need among hardworking people: clothes built to endure anything. He and tailor Jacob Davis combined copper rivet reinforcements with tough denim, leading to the first manufactured waist overalls in 1873. Today, we call them "blue jeans."'

// let str = 'blue,red-green-yellow'
// console.log(str.split('-'));



// for(let i = 0; i < 17; i++) {
//   console.log(i)
// }




// Array methods
// function types


// regular function
function sayHello() {
  console.log('hello')
}


// variable function
let greetings = function() {
  console.log('Good day!')
} 



// self invocking function

// (function x() {
//   console.log('Good day!')
// })() 



// arrow function
// parameters
  let greet = (x = 'Good morning') => {
    console.log(x) 
  }


  // arguments
  // greet('Good evening')



  let arr = [1,2,3,4,5,6,7,8,9]

  // console.log(arr)

  // arr.sort(() => {})

  // let newArr = []
  // for (v of arr) {
  //   if()
  //   newArr.push(v)
  // }

let x = 5

  // if(x == 5) {
  //   // console.log
  //   // console.log
  // } else {
  //   // console
  // }


  function abc(para = 'yes it is equal') {
    console.log(para)
  }

  // condition ? true : false
  // x == 5 ? abc() : abc('no it is equal')









// at some point in the future, 
// infinite loop

let cond = true
x = 30

// while(x < 100){
//   console.log(x);
//   x++
// }





let nums = [1,2,3,5,6,7,9,10, 4, 8]

// console.log(nums);
// console.log(nums.reverse())



// arrow function
function identifier(para1, para2) {}

// long version
() => {
  // code 1
  // code 2
  // code 3
}

// short version
() => console.log(x);

// shortest version
x => console.log(x);

// 5 no of times, run
// for(let i = 0; i < 5; i++) {}


console.log(Math.random() * 99999999);