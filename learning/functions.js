// Declarative function
// function 'name' ( 'arguments' ){ 'what to do' }

helloWorld()

function helloWorld(){
    console.log('HelloWorld')
}
helloWorld()
//can be executed "before" it is defined

// Anonymus function

var pozdrav = function(){
    console.log('Pozdrav!')
}
pozdrav()

//ES6 function syntax or arrow function
var zdravo = () => {
    console.log('Zdravo!')
}
zdravo()

// Function with arguments
function printName(name, lastName) {
    console.log(name + " " + lastName)
}
printName('Milos', 'Kos')

//Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)
console.log(multiplyByTwo(5))

//import function
import { printAge } from '../helpers/printHelper.js' //not enough! Inside package.json add "type": "module"
printAge(5)
//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(15)