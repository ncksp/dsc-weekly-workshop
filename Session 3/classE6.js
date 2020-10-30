class Person{
    name = null
    campus = null
    constructor(name, campus) {
        this.name = name
        this.campus = campus
    }

    setName(name){
        this.name = name
    }
    // setter -> ngeset
    // getter -> ngeget
}


const person = new Person("Jonathan", "Binus")
console.log(person)

person.setName("Cher")
console.log(person)
