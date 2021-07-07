const helloFuncV1 = (content) => {console.log(`Gelen parametre: ${content}`)}
helloFuncV1("Gelen data bu")

const helloFuncV2 = content => console.log(`Gelen parametre: ${content}`)
helloFuncV2("Gelen data bu")

const helloFuncV3 = (firstName, lastName) => console.log(`Ad, soyad: ${firstName} ${lastName} `)
helloFuncV3("Ege", "Akay")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Ad, soyad: ${firstName} ${lastName} `
    console.log(info)
    return info
}
helloFuncV4("Ege", "Akay")