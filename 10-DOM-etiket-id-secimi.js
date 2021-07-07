const listItems = document.querySelectorAll("nav ul li a.list-item")
console.log(listItems[2].innerHTML = "DOM ile değişti za")

listItems.forEach(element => {
    element.style.backgroundColor = 'cyan'
    element.style.fontSize = "30px"
    element.style.textDecoration = "none"
});