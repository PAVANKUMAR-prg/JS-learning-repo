const accountId = 12345;
let accEmail = "Pavan555@gmail.com";
var accountPwd = "12345";
accountCity = "Jaipur"// it is also possible in js 
//accountId = 2;
let accountState;

console.log(accountCity);
/*
Prefer not use var, because of issue in block and 
functional scope
*/

console.table([accountId,accEmail,accountPwd,accountCity,accountState])
