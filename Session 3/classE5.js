//e5 -> belum ada keyword "class" make keyword function tapi nama function nya pascal
//ada property namanya prototype -> masukin data ke function

function Person(name,  campus){
    this.name = name
    this.campus = campus

    this.describe = () => `nama ${this.name} dari kampus ${campus}`
}

Person.prototype.name = "Nicko"
Person.prototype.campus = "Binus"

const person = new Person("Nicko", "Binus")

// console.log(person.name)

console.log(person.describe())