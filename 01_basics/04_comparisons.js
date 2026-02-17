 //LEC 8   [Comparison of dataTypes]

// console.log(2>1)                              //output: true
// console.log(2<1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)


/*NOTE : neeche jitne bhi comparisons h they are not good way of comparing . we shld always compare same dataType bcuz different comparisons 
mein values are converted differently. eg "null" is sometimes converted into number(0) and sometimes into NaN */

console.log("2"> 1)                             // output:true   [automatically converted to number]. but ALWAYS compare same dataTypes
console.log("02"> 1)

console.log(null>0)                          
console.log(null==0)
console.log(null>=0)
/* equality check== and comparisons > < >=  <= work differently. comparisons convert null to a number treating as 0. 
thats why (3) null>=0 is true and (1) null>0  is false*/

console.log(undefined>0)
console.log(undefined == 0)
console.log(undefined >=0 )  

// ===  strict equality check : value k sath sath dataType bhi check krta h
 
console.log("2" === 2)                           //output : false

