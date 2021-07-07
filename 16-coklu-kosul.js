let username = prompt("Kullanıcı adınızı girin")
let age = prompt("Yaşınızı girin")
const info = document.querySelector("#info")

if (username && age >= 18) {
    info.innerHTML = "Ehliyet alabilir";
    info.style.color = "green"
} else {
    info.innerHTML = "Ehliyet alamaz";
    info.style.color = "red"
}