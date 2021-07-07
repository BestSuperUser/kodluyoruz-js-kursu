const list = document.querySelector("nav ul")

addToDo = () => {
    let newToDo = prompt("What is the new To-Do ?")
    if (newToDo != "" && newToDo != null) {
        let addLi = document.createElement("li")
        addLi.innerHTML = newToDo
        list.append(addLi)
    }
}