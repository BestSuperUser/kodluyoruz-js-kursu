//form submit

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)
formDOM.addEventListener("reset", formReset)
let scoreInputDOM = document.querySelector("#score")

function formSubmit(event) {
    event.preventDefault() //default işlemi engeller.
    localStorage.setItem("score", scoreInputDOM.value)
}

function formReset(event) {
    event.preventDefault()
    scoreInputDOM.value = null
}