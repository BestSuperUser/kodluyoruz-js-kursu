let price = 111
let stringPrice = "111"
let hasPass = true

console.log( "Price:", typeof(price) )
console.log( "Price:", typeof(stringPrice) )
console.log( "Price:", typeof(hasPass) )

console.log("-----------")
let number1 = "11"
number1 = parseInt(number1)
console.log( "number1:", typeof(number1), number1 )

let number2 = "px11"
number2 = parseInt(number2)
console.log( "number2:", typeof(number2), number2)

let number3 = "104"
number3 = Number(number3)
console.log( "number3:", typeof(number3), number3)

let number4 = "104.7234"
number4 = parseFloat(number4)
console.log( "number4:", typeof(number4), number4)

// numberdan stringe

let number5 = 55
number5 = number5.toString()
console.log( "number5:", typeof(number5), number5 )