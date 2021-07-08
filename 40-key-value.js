let laptop1 = {
    brand: "Apple", 
    model: "MacBook Pro",
    "2kg": 2
}
console.log(laptop1)

// Doğru keyi oluşturmak
console.log(laptop1.brand);
console.log(laptop1.model);
console.log(laptop1["2kg"]);
console.log("-------------");

// keye yeni value ekleme
laptop1.brand = "Mac"
console.log(laptop1);

// yeni bilgi ekleme
laptop1["version"] = "10.15.17"
console.log(laptop1);
console.log("-------------");

// key bilgisine ulaşmak -> Object.keys(item)
let keys = Object.keys(laptop1)
console.log(Object.keys(laptop1));

keys.forEach(key => {
    console.log(`${key}: ${laptop1[key]}`)
})
console.log("-------------");

// value bilgisine ulaşmak -> Object.value(item)
let values = Object.values(laptop1)
console.log("LAPTOP ÖZELLİKLERİ:");
values.forEach(value => {
    console.log(value);
})
