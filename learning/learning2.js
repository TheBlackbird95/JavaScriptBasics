// Relational or comparison operations

var result = 10 > 5
console.log(result)
// >, <, <=, >= - always gives boolean


// Equality operators

var x = 1
console.log(x== '1') //true because it compares only values - lose comparison
console.log(x === '1') //false because it compares data type too - strick comparison - in this case 'x' is number, but our equalation is string


// Logical operatirs
// "AND"
console.log(true && true) //all values have to be TRUE for expression to be TRUE, if any is FALSE - result is FALSE

// "OR"
console.log(true || false) //if any value is TRUE - expression is true, it is FALSE only if both comparing values are FALSE


var ageIsMoreThanEighteen = false
var isUSCitizen = true
var driverLicense = ageIsMoreThanEighteen && isUSCitizen
console.log("This customer is eligible for driving license : " + driverLicense)
var driverLicense = ageIsMoreThanEighteen || isUSCitizen
console.log("This customer is eligible for driving license : " + driverLicense)

// "NOT"
console.log(!true) //it gives a result oposite to the boolean
console.log(6 == 10)
console.log(6 !== 10)