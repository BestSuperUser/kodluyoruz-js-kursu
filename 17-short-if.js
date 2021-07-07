let username = prompt("Kullanıcı bilginizi yazın")
const info = document.querySelector("#info")

// shortif 
// kosul ? dogruysa : yanlışsa

info.innerHTML = `${username ? username : "Kullanıcı bilginiz bulunamadı"}`