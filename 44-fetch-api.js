const listDOM = document.querySelector(".list-group")

// .JSON dosyasında da aynı şekilde çekilmekte
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(res => res.forEach(item => {
    let itemDOM = document.createElement("li")
    itemDOM.className = "list-group-item text-center"
    itemDOM.innerHTML = item.title
    listDOM.append(itemDOM)
}))

