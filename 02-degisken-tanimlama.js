//var function scope özelliği taşır.

var ServerName = "api.kodluyoruz.org"
console.log(ServerName)

//let block scope özelliği taşımaktadır.

let ServerName;
console.log(ServerName)
ServerName = "api.kodluyoruz.org"
console.log(ServerName)

let Password = "secret"
Password += " Pass"
console.log(Password)

//Yani let ile oluşturulan bir değişken sadece oluşturulduğu yerdeki süslü parantezler içerisinde erişilebilirdir ve dışarısında kullanılamaz.

// const ile boş değişken tanımlanmaz, tanımlanan değişken değiştirilemez.
const ServerPass = "secret"
//ServerPass = "başka şifre"  // hata verir.
