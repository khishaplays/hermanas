/*truthy and falsy
anything that is not falsy is truthy

1. false
2. 0
3.0
4.-0
5. undefined
6.''-empty string
7.NoN-not a number*/

let userName1="khisha lisa"
let userName2="0"//falsy

let activeUserName=userName2 || userName1
//activeUserName
console.log(activeUserName)

let bothUserNameok=userName1&&username2
console.log(bothUserNameok)