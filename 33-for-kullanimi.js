let users = ["lorem", "ipsum", "dolor"]
const list = document.querySelector("#userList")

for (let i = 0; i < users.length; i++) {
    let LiDOM = document.createElement("li")
    LiDOM.innerHTML = users[i]
    LiDOM.className = "list-group-item text-center"
    list.append(LiDOM)
}