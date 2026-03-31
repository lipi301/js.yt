const name = "Lish"
const repoCount = 50

console.log(name + repoCount + " Value at")

// console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Lishaz-ls-com')                          //declaring a string
                                                               //string is an object(key-value pair)

// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('s'))

// const newString=gameName.substring(0,4)                              //cannot use negative values
// console.log(newString)

// const anotherString=gameName.slice(-6,4)                            //can use negative values  :index= (-6 + length of string)
// console.log(anotherString)

const anotherString1 = '   Lishaz   '
// console.log(anotherString1)
// console.log(anotherString1.trim())                                     //whitespaces(whitespaces and line terminators) start aur end se Remove karta hai,
                                                                          // beech se nahi

const str="\n Hello\nWorld   \n"
// console.log(str.trim())


const url ="https://lishaz.com/lishaz%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('lishaz'))
console.log(url.includes('cris'))

console.log(gameName.split('-'))                                    //splits into array of elemnts based on seperator and limit



