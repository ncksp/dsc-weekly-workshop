//arrow function itu baru ada ri es6 / es2015

//tradisional function
function hello(name) {
    return console.log(`Halo ${name}`)
}
hello("nicko")

//arrow function
add = (x, y) => x + y

console.log(add(1, 2))

// *****kelebihan arrow function*****
//arrow function gak perlu make bracket kalo cuma 1 line
//gak perlu make keyword function
//lebih simple

//lexical this punya scooping yang beda dari function biasa
let cart = {
    string: "Add product with price: ",
    products: [
        {
            id: 1,
            price: 2000,
        },
        {
            id: 2,
            price: 3000,
        },
    ],
    grandTotal: 0,
    countTotalPrice() {
        // this.products.forEach(function (product) {
        this.products.forEach(product =>
            console.log(this.string, product.price)
            // }.bind(this)) //bind, call, apply
        ) //bind, call, apply
    }
}

cart.countTotalPrice()


//bind, call, apply
//dia masukin object lain ke object dia / function dia
const car = {
    price: 1000,
    type: "Honda HRV"
}

//bind -> cuma 1x aja bisa masukin object lain, karena ini ditampung ke variable
//x -> a, y -> a

function getCar() {
    console.log(`tipe nya ${this.type} dengan harga ${this.price}`)
}

const myCar = getCar.bind(car)
// console.log(myCar())

//call, apply -> bisa berkali2 ngubah datanya
//x->a , y -> a

getCar.apply(car)
