let products;

try {
    products.forEach(product => console.log(product));    
} catch (err) {
    products = [1,2,3]
    products.forEach(product => console.log(product))
}

console.log("hata yönetimi düzgün çalışıyor")

let info = "kodluyoruz"
console.log(info);