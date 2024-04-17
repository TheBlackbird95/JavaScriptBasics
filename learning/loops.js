//for i loop
for(let i = 0; i<5; i++){
 console.log('Hello World!')
}

//for of loop
var auto = ["Volvo", "Audi", "Fiat"]
for(let car of auto){ //'car' is one variable in 'auto' array - it automaticaly breaks when the end is reached
    console.log(car)
    if(car == "Audi"){
        break
    }
}

//ES6 syntax for each loop
auto.forEach( car => {
    console.log("For each " + car)
});

//while
var j = 0
while(j<5){
    console.log('J Hello World!')
    j++;
}