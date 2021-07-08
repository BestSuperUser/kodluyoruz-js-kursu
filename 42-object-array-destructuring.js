let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127,0,0,1",
    serverName: "kodluyoruz.org"
}

let {userName, password, isActive, ip:serverIP, serverName} = settings // ip:serverIP settingsteki ip'i serverIP olarak alır
console.log(userName, password, isActive, serverIP, serverName);

console.log("------------");

let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings
console.log(Array.isArray(newSettings));
console.log(newSettings)

console.log("------------");
// let settings2 = settings !!!hatalı kullanımdır, settings2 de değişiklik olursa settingsi de etkiler.
let settings2 = {...settings} //doğru kullanım.


console.log("------------");
let score = [100, 200, 300, 400]
let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore);

let score2 = [...score]