//inherit itu nurunih features (attribute, method, behavior dll)
class Animal{
    name = null
    constructor(name){
        this.name = name
    }

    run(){
        console.log(`${this.name} is running`)
    }
}

class Cat extends Animal{
    constructor(name){
        super(name)
    }
}

const cat = new Cat("Black")

cat.run()