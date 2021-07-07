let products = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server"]
//return item, index, arr
products.forEach((product, index, arr) => arr[index] = product.toUpperCase())

const UL_DOM = document.querySelector("#userList")


products.forEach(product => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = product
    liDOM.className = "list-group-item text-center"
    UL_DOM.append(liDOM)
});