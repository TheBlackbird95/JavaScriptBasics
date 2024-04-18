import { CustomerDetails } from "../helpers/printHelper.js";

var customerDetails = new CustomerDetails() //constructor (same as in Selenium) - instance of the class - name doesn't have to be the same
/*
for cleaner code, constructor can be set in printHelper.js, and here we import only customerDetails instance, not whole class -> see commented part in printHelper.js too - line 9
 instead of first line, it would be written

 import { customerDetails } from "../helpers/printHelper.js";
 */

customerDetails.printFirstName('Perica')
customerDetails.printLastName('Perić')