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



//Reference( Non -primitive)

//Array, objects , Functions

const heroes = ["shaktiman", "naagraj", "doga"];               //array

{
  name : "Lish",
  age : 22                                                  // object: key-value pair
}

let obj={
  name : "Lish",
  age : 22,                                                  // object: key-value pair
}








// statically typed language: datatype pehle hi batana padta hai (before running the program)
// dynamically typed language :datatype automatically decide hota hai during runtime (jab program chal raha hota hai).

//JAVASCRIPT : Dynamically typed language
