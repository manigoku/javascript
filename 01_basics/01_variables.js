const accountId = 144553
let accountEmail ="mani@gmail.com"
var accountPassword = "12345"
accountCity = "vijayawada"

 // accountId = 2 // not allowed
console.log(accountId);
 /*
prefer not to use var because of issue in block scope and functional scope
 */
console.table([accountEmail,accountId,accountPassword,accountCity])
