// console.log("Hello World")

// //===================== COWSAY =========================

// const cowsay = require('cowsay');

// console.log(
//     cowsay.say({
//         text: "Node Js Class 2",
//         e: "**",
//         T: "U"
//     })
// )

// //=================== Chalk =============================

// const chalk = require('chalk')

// console.log(chalk.green('hello'))
// console.log(chalk.red('World'))
// console.log(chalk.bgBlue('World'))

// console.log(
//     chalk.red(
//         cowsay.say({
//             text: ' ',
//             e: "0o",
//             T: ""
//         })
//     )
// )

// //========================== DOTENV ==========================

// const dontenv = require("dotenv")
// dontenv.config();
// //====================== READING ENV VARIABLES ==============

// console.log(process.env.PORT)
// console.log(process.env.DB_USERNAME)
// console.log(process.env.DB_PASS)

// //===================== IMPORT EXPORT MODULES IN NODEJS ==========

// const car = require('./car.js')
// console.log(car)

// const myMath = require('./myMaths.js')

// console.log(myMath.sum(4, 5))

// const { sum, sub, mul, div, PI } = require('./myMaths.js')

// sum(4, 4)
// sub(8, 4)
// mul(8, 4)
// div(8, 4)

// console.log(PI)

//=========================Exception Handling Error Handling ==============================

const greetings = (name) => {
    console.log(`Hello ${name.toUpperCase()}`)
}

// greetings('shahbaz');


// greetings(12);

console.log("Before Error")

try {
    // greetings('shahbaz');
    greetings(12);

} catch (error) {
    console.log(error.message)
} finally {
    console.log('I am finally')
}
console.log("After Error")

//======================== THROWING CUSTOM ERROR ===============================

const divide = (x, y) => {
    if (typeof x != "number" && typeof y != "number") {
        throw new Error("Input Must be in Numbers")
    }

    if (y === 0) {
        throw new Error("Cannot Divide By Zero")
    }

    console.log(x / y)
}


// divide("a",5)
// divide("abc","abv")

try {
    // divide(4,0)
    divide("a", "a")
} catch (error) {
    console.log(error.message)
}

//==================unCaught Exception======================

process.on("uncaughtException", () => {
    console.log("An uncaught Exception Occured")
    process.exit()
})

// divide(10 , 0)


//==================SYnchronous Programming =============

console.log("A")
console.log("B")
console.log("C")
console.log("D")

// const syncFunction = () =>{
//     let futureTime = new Date().getTime() + 3000
//     while(futureTime > new Date().getTime()){
//         console.log("processing ....")
//     }
// }

// console.log("Line # 1 ")
// syncFunction();
// console.log("Line # 2 ")

//========================= ASYNCHRONOUS PROGRAMMING ===============

const asyncFunction = () => {
    setTimeout(() => {
        console.log("Processing .....")
    }, 3000) 
}

console.log("Line # 1 ")
asyncFunction();
console.log("Line # 2 ")

//=================== Call Backs =========================

const ConnectToDb = (cb) => {
    console.log("Starting to Connect To Database")
    console.log("😴😴😴😴😴😴😴")
    console.log("Connected To Database")
    cb();
}

ConnectToDb(()=>{
    console.log("I AM CB FUNCTION")
})

