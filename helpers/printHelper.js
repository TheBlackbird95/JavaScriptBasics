//export is used so that function or class can be visible in other files - in Selenium 'public'

export function printAge(age){
    console.log(age)
}

//Class 'NameOfClass' { method }
export class CustomerDetails{
    /*
    If we want to write constructor here, instead of 'export class' we would remove 'export' and add after the method we should write
    export const customerDetails = newCustomerDetails()
    */
    printFirstName(firstName){
        console.log(firstName)
    }
/**
 *  This method will print the last name
 * @param {string} lastName 
 */
//this created a description of a method when method name is hovered
    printLastName(lastName){
        console.log(lastName)
    }
}
