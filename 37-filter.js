const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(product => product.length > 5)
console.log(NEW_PRODUCTS);

const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false}
]

const ACTİVE_USERS = USERS.filter(user => user.isActive)
console.log(ACTİVE_USERS);



// -------------------

function filterScore(value) {
    return value.Score > 74
}

const SCORES = [
    {name: "Ege", Score: 90},
    {name: "Ahmet", Score: 50},
    {name: "Ayşe", Score: 75},
    {name: "Zeliha", Score: 67},
    {name: "Mum", Score: 62},
]

console.log(SCORES.filter(filterScore))