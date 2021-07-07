let user = {userName: "EgeAkay", isActive: true}
localStorage.setItem("userInfo", JSON.stringify(user))
let userInfo = localStorage.getItem("userInfo")
userInfo = JSON.parse(userInfo)
console.log(userInfo);

let items = [1,2,3,4,user]
localStorage.setItem("newItem", JSON.stringify([1,2,3,user]))
items = JSON.parse(localStorage.getItem("newItem"))
console.log(items);