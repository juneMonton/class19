// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let x=true;
alert(x)


// Declare a variable, reassign it to your favorite color, and console log the value
let y="Army Green";
console.log(y)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function sumThreeAndDivide(a,b,c,d){
    return (a*b*c)/d
}
console.log(sumThreeAndDivide(1,2,5,2))
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function twoNumbers(x,y){
    console.log(Math.pow(x,y))
}

twoNumbers(4,2)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function boolString(boolean,string){
    if(boolean){
        alert(string)
    }else {
        console.log(string)
    }
}

//alternative way to write the above function

//b? alert(str) : console.log(str)

//const boolString = (boolean,string)=>b? alert (string) : console.log (string)

boolString(true,"It's True!")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num){
    for(let i=1;i<=num;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }else if(i%3===0){
            console.log("fizz")
        }else if(i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(20)