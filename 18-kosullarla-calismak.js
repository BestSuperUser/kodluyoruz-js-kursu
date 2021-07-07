let examGrade = prompt("Puanınızı girin")
const info = document.querySelector("#info")
let text

if (examGrade <= 100 && examGrade >= 0) {
    if (examGrade >= 90) {
        text = "AA"
    } else if (examGrade >= 85) {
        text = "BA"
    } else if (examGrade >= 80) {
        text = "BB"
    } else if (examGrade >= 75) {
        text = "CB"
    } else if (examGrade >= 70) {
        text = "CC"
    } else if (examGrade >= 65) {
        text = "DC"
    } else if (examGrade >= 60) {
        text = "DD"
    } else if (examGrade >= 50) {
        text = "FD"
    } else {
        text = "FF"
        info.classList.remove("text-primary")
        info.classList.add("text-danger")
    }
} else {
    text = "Puan hatalı aralıkta."
    info.classList.remove("text-primary")
    info.classList.add("text-danger")
}

info.innerHTML = `${examGrade} -> ${text}`