let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [90,70,80,50],
    isActive: true,
    shortName: function() {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    },
    // shortNameReturn: () => {                            //THİS KULLANILAMAMAKTA !!!
    //     return `${user1.firstName} ${user1.lastName}`
    // }
}

console.log(user1.shortName())