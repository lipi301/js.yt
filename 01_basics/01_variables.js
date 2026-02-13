const accountId = 56784                                   //cannot be changed
let accountEmail= "lish@google.com"
var accountPassword= "98674"                              //don't use 'var' instead use 'let'
accountCity ="Delhi"
let accountState

//accountId = 2         //not allowed

console.log(accountEmail);

accountEmail ="jave@gooogle.com"
accountPassword ="8575hgio"
accountCity="Jaipur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword , accountCity ,accountState]);          //table :sare output ek command mein print krane k liye rather than writing console.log for individual variable

/*prefer not to use var
because of block scope and functional scope*/