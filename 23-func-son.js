let counter = 0
const counterDOM = document.querySelector("#counter")
const increaseDOM = document.querySelector("#increase")
const decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent () {
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}