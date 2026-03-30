/*dataTypes : primitive and non-primitive */

  /*Primitive       : they are call by value (whenever we copy them, only their value gets copied 
                      and we are making changes to their copied values)   */

//types : String, Number, Boolean, null, undefined , Symbol, BigInt

const score= 100
const scoreValue = 100.3                //datatype: number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const ID= Symbol('123')
const newID= Symbol('123')

console.log(ID == newID)                         //false

const bigNumber = 5760194761947698576983n        // putting 'n' at last of number converts it into BigInt   



//Reference( Non-primitive)                       //jo bhi changes honge reference(original value) mein honge

//Array, objects , Functions                    =>all non-primitive variables have datatype/return type as'object'. functions: 'function object'     

const heroes = ["shaktiman", "naagraj", "doga"];            //array

{
  name : "Lish";
  age : 22;                                                 // ye ek block h na ki koi object. ise ek variable ko assign krna pdega 
                                                            //   to make it an object
}

let obj={
  name : "Lish",
  age : 22,                                                  // object: key-value pair (dataType kchh bhi ho skta h)
}
                    //although variables defined with 'const' cannot be changed BUT value of key-value pairin 'const object={---}' can be changed


const myFunction = function() {
  console.log("Hello World")
}

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)
// console.log(typeof scoreValue)
// console.log(typeof newID)
// console.log(typeof heroes)
// console.log(typeof myFunction)



// statically typed language: datatype pehle hi batana padta hai (before running the program)
// dynamically typed language :datatype automatically decide hota hai during runtime (jab program chal raha hota hai).

//JAVASCRIPT : Dynamically typed language


                       //https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive dataTypes),Heap(non-primitive)

let myYoutubeName = "lishdotcom"

let anotherName = myYoutubeName
anotherName = "Kerendotcom"

console.log(myYoutubeName)
console.log(anotherName)


let userOne = {
  email : "user@google.com" ,
  upi : "user@ybl"
}

let userTwo = userOne                           //non-primitive Type mein jb variable copy krte h tab unka reference copy hota h 
userTwo.email = "lish@google.com"                  //  toh jo bhi changes honge wo original value mein honge

console.log(userOne.email)
console.log(userTwo.email)

