let price = "100"
let user = "hakan"
// == değeri eşitse
console.log("==",price == 100)
// === hem değeri hem türü eşitse
console.log("===", price === 100)
// != eşit değilse
console.log("!=",price != 1)
console.log("!=",user != "guest")
// < küçükse
console.log("<",price < 100);
// <= küçük eşitse
console.log("<=",price <= 100);
// > büyükse
console.log(">",price > 100);
// => büyük eşitse
console.log(">=",price >= 100);
// && ve
console.log(price < 200 && user != "guest")
// || veya
console.log(price > 0 || user != "guest");
// ! değil (tersi)
console.log(!(price > 0 || user != "guest"));