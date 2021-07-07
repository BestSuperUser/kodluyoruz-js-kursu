let username = "hakan"
const DOMAIN = "kodluyoruz.org"
let email = username + "@" + DOMAIN

let info = `Merhaba ${username} sitemize hoş geldin 
mail adresiniz: ${email}

kısa isminiz: ${username[0]}.

mail adresinin uzunluğu: ${email.length}
borcunuz: ${ (2 + 3) * 5 } TL
günün saat bilgisi: ${new Date().getHours()}
`

console.log(info)