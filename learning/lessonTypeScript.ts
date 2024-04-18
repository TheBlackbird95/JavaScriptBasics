//typescript preventing us to assign different data type that is previously defined

var customerFirstName = "Steva"
var customerFirstName = "Stević"
var customerAge = 25
// customerFirstName = 1000 - can't be done

//expicitly assign data type
var ime: string = "Petar"
//ime = 25 - can't be done

//creating type
type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Mara",
    lastName: "Marić",
    active: true
    //nothing can't be added or removed
}