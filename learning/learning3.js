//Conditional statement

var time = 12
if (6 <= time && time < 12){
    console.log("Good Morning")
} else if (12 <= time && time < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}

var ageIsMoreThanEighteen = true
var isUSCitizen = true

if (ageIsMoreThanEighteen && isUSCitizen){
    console.log('Customer is eligible for drivers license')
} else {
    console.log('Customer is not eligible for drivers licese')
}