let items = [1, 2, 3, 4, 5]

// arr içi arr
let femaleUser = ["Ayşe", "Hülya", "Merve"]
let maleUser = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUser)
console.log("Başa kadınları eklemek: ", items);

items.push(maleUser)
console.log("Sona erkekleri eklemek: ", items);


console.log(items[0].length); // arr içindeki kadınlar arr'inin öğe sayısı
console.log(items[0][0]) // arr içindeki arrin ilk ögesi

// arr içi öğe ayırma -> splice
let newItems = items.splice(1,4)
console.log(newItems);
console.log(items);

// ogenin indexini bulma -> indexOf
items.unshift("lorem")
items.push("ipsum")
console.log("baş: ",items.indexOf("lorem"), "son: ", items.indexOf("ipsum"))

// arr kopyalama -> slice
let copyItems = items.slice()
copyItems = [...items]

/* 
    console.log(items);
    copyItems.pop() // sadece copyden çıkartmayı beklerken itemstan çıkartır ("KOPYASINI OLUŞTURMADI")
    console.log(copyItems);
    console.log(items);
*/

// iki arr bilgisini birleştirmek -> [ ...ES6, ...ES6]
let allUsers = [...maleUser, ...femaleUser]
console.log("All Users: ", allUsers);

// arr içi bilgiyi stringe çevirme -> toString join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

// indexe öğe ekleme -> splice
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Melisa")
console.log(allUsers.join(" --- "));
