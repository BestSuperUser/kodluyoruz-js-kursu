/*
1 formu seç
2 input bilgisini UL içine ekle
3 form içindeki bilgiyi sıfırla
4 forma bilgi girilmezse kullanıcıyı uyar
*/

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formHandler)
let alertDOM = document.querySelector("#alert")
const alertFunc = (title, message, color="danger") => `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message} 
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = null
        SCORE.value = null
        alertDOM.innerHTML = null
    } else {
        alertDOM.innerHTML = alertFunc("bilgi başlığı.", "Eksik bilgi girildi.")
    }
}

let userListDOM = document.querySelector("#userList")
function addItem(username, score) {
    let liDOM = document.createElement("li")
    liDOM.classList = "list-group-item d-flex justify-content-between align-items-center"
    liDOM.innerHTML = `${username}
    <span class="badge bg-primary rounded-pill">${score}</span>`
    userListDOM.append(liDOM)
}