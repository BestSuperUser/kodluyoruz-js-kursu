let items = [10, 20, 30, 40]
console.log("Listenin ilk hali: ", items)

// sona eleman ekleme -> push
items.push(50)
console.log("sona eleman ekleme: ", items);

// başa eleman ekleme -> unshift
items.unshift(0)
console.log("başa bilgi ekleme: ", items);

// sondaki ögeyi çıkartma
let lastItem = items.pop()
console.log("sondan eleman çıkartma: ", items, " çıkan eleman ", lastItem );

// baştaki ögeyi çıkartma
let firstItem = items.shift()
console.log("baştan çıkan eleman: ", items, " çıkan eleman: ", firstItem);

// listedeki bir ögenin bilgisini değiştirme
items[0] = 5
console.log("öğe güncelleme (baş): ", items);

items[items.length - 1] = 45
console.log("öğe güncelleme (son): ", items);