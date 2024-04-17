//Concatination and Interpolation

var product = "bottle"
var price = 50
var messageToPrint = "The price for your " + product + " is " + price + " euros!" //concatination
var newMessageToPrint = `The price for your ${product} is ${price} euros!` //interpolation
console.log(messageToPrint)
console.log(newMessageToPrint)

//Objects

var customer = {
    firstName: 'Pera',
    lastName: 'Perić'
}
console.log(customer)
console.log(customer.firstName)
console.log(customer['lastName'])
//Dot notation
customer.firstName = "Steva"
//Bracket notation
customer['lastName'] = "Stević"
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var car = ["Volvo", "Tesla", "Dacia"]
console.log(car)
console.log(car[0])
car[0] = "BMW"
console.log(car[0])

//Objects can have arrays inside
var buyer = {
    ime: 'Laza',
    prezime: 'Lazić',
    auto: ["Volvo", "Audi", "Fiat"]
}
console.log(buyer.auto[0])