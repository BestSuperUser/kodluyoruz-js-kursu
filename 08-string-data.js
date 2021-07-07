let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

// karakter sayısı
console.log( email.length )

// ilk karakter
console.log( firstName[0] )
console.log( firstName.charAt(0) )

// buyuk/kucuk harf yapma
console.log( firstName.toUpperCase() )
console.log( lastName.toLowerCase() )

// yer arama ve bulma // includes'den farkı -1 veya yer dönmesi
console.log( email.search("@") )

// belli bir yere kadar al
const DOMAIN = email.slice( email.indexOf("@") + 1, email.indexOf(".") )
console.log("Domain:", DOMAIN )

// bilgi değiştirme
email = email.replace("gmail.com", "kodluyoruz.org")
console.log(email)

// istediğim bilgi var mı ?
console.log( email.includes("@") ) //searchten farkı true/false çevirmesi

// böyle mi bitti ?
console.log( email.endsWith("kodluyoruz.org") )