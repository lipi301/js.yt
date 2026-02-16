          /*convert to number*/


//  let score= 33

//  console.log(typeof score)
//  console.log(typeof (score))


//  let score1 ="33"
//  console.log(typeof score1);                     //output:number(lower case mein likh hoga)

//  let valueInNumber= Number(score1)               //yhan number k 'N' capital h: Number
 
//  console.log(typeof valueInNumber) 
//  console.log(valueInNumber) 


//  let score2="33abc"
//  console.log(typeof score2)

//  let valueInNumber2= Number(score2)
//  console.log(typeof valueInNumber2) 

//  console.log(valueInNumber2)                      // NaN : Not a Number   (datatype: number)


//  let score3=null
//  console.log(typeof score3)

//  let valueInNumber3= Number(score3)
//  console.log(typeof valueInNumber3) 

//  console.log(valueInNumber3)                   //carefull: iska output hme 0 dedega.which might be a value in ur data eg temperature but null means empty

 
//  let score4=undefined
//  console.log(typeof score4)

//  let valueInNumber4= Number(score4)
//  console.log(typeof valueInNumber4) 

//  console.log(valueInNumber4)                   //output: NaN 


 
//  let score5=true
//  console.log(typeof score5)

//  let valueInNumber5= Number(score5)
//  console.log(typeof valueInNumber5) 

//  console.log(valueInNumber5)    

 
 
//  let score6="Lish"
//  console.log(typeof score6)

//  let valueInNumber6= Number(score6)
//  console.log(typeof valueInNumber6) 

//  console.log(valueInNumber6) 

 
                             /*conversion to Number
                             "33" => 33
                             "33abc" => NaN
                              true => 1; false =>0
                              */
            



          /*convert to boolean*/

let isLoggedIn=1

let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

 let isLoggedIn_ =""  
 let booleanIsLoggedIn_= Boolean(isLoggedIn_)
// console.log(booleanIsLoggedIn_)
  

let isLoggedIn2 ="Lish"
//let booleanIsLoggedIn2= Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2)

                      /*  conversion to Boolean (outputs)
                          1=> true , 0 => false
                          "" => false
                          "Lish" => true
                          */
              

         
            /*convert to string*/

let isNumber =33
let stringNumber = String(isNumber)
//  console.log(stringNumber)
//  console.log(typeof stringNumber)


                  //LEC-7

let value= 3
let negValue= -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)                 //2 raised to power 3
// console.log(2/3)
// console.log(2%3)

let str1= "Hello"
let str2= " Lish"
let str3= str1 + str2
// console.log(str3)


//  console.log("1" + 2)
//  console.log(1 + "2")
//  console.log("1" + 2 + 2)                  //agr string first h toh sab string ki trh treat honge 
//  console.log(1 + 2 + "2")                  //string last mein h toh phle jo conversion/operation h ho jaega then treat them like string

//  console.log(2 + 3 * 4 % 5)                //very bad ,messy way of code
//  console.log((2 + 3) * 4 % 5)              //use roper parenthesis.more readability 


// console.log(+true);                         //bad way
// console.log(+"") 

let num1 ,num2 , num3
num1= num2 = num3= 2 + 2                   //low readability
  
let gameCounter =100
gameCounter++                              //postfix increment
console.log(gameCounter)

++gameCounter
console.log(gameCounter)














