let greeting = document.querySelector("#greeting")

greeting.addEventListener("click", domClick)

function domClick() {
    console.log(this.innerHTML);
    this.innerHTML = "Ben değiştim"
    this.style.color = "red"
    
}
