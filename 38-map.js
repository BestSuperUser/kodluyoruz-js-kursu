const USERS = ["AYSE", "MehMEt", "TugCE", "AkSeL"]

// userName'de isim orjinal kalsın
// showtName içinde ilk harf büyük olsun ["A", "B"...]
// newName içinde ilk harf büyük olsun 
// {userName: "", shortName: "", newName: ""}

const NEW_USERS = USERS.map( user => user.toLowerCase())
console.log(NEW_USERS);

const USERS_OBJ = USERS.map( item => {
    return {userName: item, shortName: item[0].toUpperCase(), newName: item[0].toUpperCase() + item.slice(1).toLowerCase()}
})

console.log(USERS_OBJ);