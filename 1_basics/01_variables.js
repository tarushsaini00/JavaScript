const accountId = 24552
let accountEmail = "kuch@gmail.com"
var accountPassword = "1452"
accountCity = "Jaipur"
let accountState;
// let accountState = "Rajasthan";

// accountId = 2 // not allowed

accountEmail = "hc@Ch.com"
accountPassword = "124578"
accountCity = "Bengaluru"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/ 

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
