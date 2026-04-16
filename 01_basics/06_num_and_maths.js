// const score= 200;
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString())                                    //converted to string
// console.log(balance.toString().length)                             //converted to string then we can use string methods on this      

// console.log(balance.toFixed(2))                                   //taking decimal values upto given no of places after decimal

// const otherNumber = 1233.8999
// console.log(otherNumber.toPrecision(3))                           //presicing value upto given no of significant digits

// const hundreds =1000000
// console.log(hundreds.toLocaleString())                            //represents no into interantional standard(with commas)
//console.log(hundreds.toLocaleString('en-IN'))                     //represents no into indian standard system


//++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))                                      // abs:absolute value(neg to positive)
// console.log(Math.abs(4))
// console.log(Math.round(5.6));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.9));
// console.log(Math.floor(5.9));
// console.log(Math.min(5,7,2,8));
// console.log(Math.max(5,7,2,8));

console.log(Math.random());                                     //value always b/w 0 and 1  (0 included, 1 excluded)

console.log((Math.random()*10) +1);                             //adding 1 bcuz hme values min 1 se upar chahiye.
                                                                //random()*10 :setting Range. (value is under 10.(never 10 though))
console.log(Math.floor(Math.random()*10) +1);                   //jb 1 digit hi chahiye value mein

const min =10
const max =20
console.log(Math.random()*(max - min + 1) + min);               //ismein value will be less than 21
console.log(Math.random()*(max - min + 1) + min);               //ismein value will be less than 20











 