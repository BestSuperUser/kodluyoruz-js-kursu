//number data atama
let price = 100
let tax = 0.10
let priceTax = price * tax
let totalPrice = price - priceTax
console.log(`price: ${price}, tax: ${tax}, price tax: ${priceTax}, total price: ${totalPrice}`)

//arttırma / azaltma
let counter = 0
counter++
counter++
console.log(counter)
counter--
counter--
counter--
console.log(counter)
counter *= 10
console.log(counter)

counter /= 2
console.log(counter)
counter *= -1

//kalan işlemi %
let number = 9
console.log(number % 2)

//us alma
console.log(2**3)

//aşağı yuvarlama
console.log( Math.floor(1.7) )

//yukarı yuvarlama
console.log( Math.ceil(1.1) )

//yakına yuvarlama

console.log( Math.round(1.7) )
console.log( Math.round(1.1) )

let stringNumber = "11"
let newNumber = Number(stringNumber)
console.log(newNumber)