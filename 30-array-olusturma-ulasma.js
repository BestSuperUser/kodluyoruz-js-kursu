// Array oluşturmak
let domain = "kodlyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items);

let emptyArray = [] // boş list
// Eleman sayısını öğrenme
console.log(items.length);
// Ilk elemanı çağırma
console.log(items[0]);
// Son elemanı çağırma
console.log(items[items.length-1]);
// Arrayin ortasındaki elemanı çağırma 
console.log("Ortadaki:", items[Math.floor(items.length/2)]);
// Değişken içi bilginin array olma durumu kontrolü
console.log(Array.isArray(items));


// hangileri is array true verir
console.log("[]", Array.isArray( [] ))
console.log("1", Array.isArray( 1 ))
console.log("true", Array.isArray( true ))