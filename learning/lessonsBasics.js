// Hello World
console.log("Hello World!")

// Variables - `let` has limited access
var firstName = "Miloš"
let lastName = "Kos"
console.log(firstName + lastName)

var age, dateOfBirth, sex
age = "28"
sex = "Male"
console.log(age)
age = "82"
console.log(age)
console.log(dateOfBirth)

//constants
const occupation = "Tester"
// occupation = "driver" - constant cannot be changed, and has to be defined in the same line as it is created
console.log(occupation)

//data types
var prezime = 'Kos' //string
var yearOfBirth = 1995 //number - if entered like "1995", we cannot do math operations with other numbers
var married = false //boolean
var yearsInMarriage = null //null - no value, not 0
var numberOfCars = undefined //

var badYearOfBirth = "1995"
console.log(2*yearOfBirth) //works fine
console.log(2*badYearOfBirth) //works the same
console.log(badYearOfBirth + yearOfBirth) //does not displaye 3990
console.log(yearOfBirth + yearOfBirth) //works fine
console.log(badYearOfBirth + badYearOfBirth)