let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "İlk item dom'dan değişti"

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "Son item dom'dan değişti"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")
liDOM.innerHTML = "Kendi oluşturduğumuz oge"

ulDOM.append(liDOM) // sona ekler
ulDOM.prepend(liDOM) // başa ekler

console.log(ulDOM.lastChild)