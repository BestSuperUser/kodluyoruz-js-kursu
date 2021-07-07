const LOREM_LIST = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"
]

// for (let i = 0; i < LOREM_LIST.length; i++) {
//     console.log(i);
//     if (i == 5) {
//         break        
//     }
// }

// console.log("--------------");

// for (let i = 0; i < LOREM_LIST.length; i++) {
//     if (i == 5 || i == 3 || i == 4) {
//         continue
//     }
//     console.log(i);
// }

const UL_DOM = document.querySelector("#userList")

// for (let i = 0; i < LOREM_LIST.length; i++) {
//     if (LOREM_LIST[i] == "dolor") { break }
//     let liDOM = document.createElement("li")
//     liDOM.className = "list-group-item text-center"
//     liDOM.innerHTML = LOREM_LIST[i]
//     UL_DOM.append(liDOM)
// }

for (let i = 0; i < LOREM_LIST.length; i++) {
    if (LOREM_LIST[i] == "dolor") { continue }
    let liDOM = document.createElement("li")
    liDOM.className = "list-group-item text-center"
    liDOM.innerHTML = LOREM_LIST[i]
    UL_DOM.append(liDOM)
}