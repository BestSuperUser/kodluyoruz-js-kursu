// kullanıcı bilgisi varsa ekrana yazdır.
let username = prompt("Kullanıcı adınızı girin")
if (username) {
    document.write(`<h3 style="color: green;">Kullanıcı bilginiz: ${username}</h3>`)
} else {
    document.write("<h3 style='color: red;'>Hatalı kullanıcı bilgisi</h3>")
}