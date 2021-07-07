let firstName = "Egeeeee"
let lastName = "Akaaayyyy"

function greeting(name="", lastName ="") { //default parametre alır
    console.log(`Merhaba ${name} ${lastName}`);
}

greeting(firstName, lastName)

function greeting2(name="", lastName ="") { //default parametre alır
    return(`Merhaba ${name} ${lastName}`);
}

console.log(greeting2(firstName, lastName));

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo("greeting", greeting2("Lorem", "Ipsum"))