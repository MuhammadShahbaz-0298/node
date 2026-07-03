console.log("Hello World")

//===================== COWSAY =========================

const cowsay = require('cowsay');

console.log(
    cowsay.say({
        text :"Node Js Class 2",
        e:"**",
        T:"U"
    })
)

//=================== Chalk =============================

const chalk = require('chalk')

console.log(chalk.green('hello'))
console.log(chalk.red('World'))
console.log(chalk.bgBlue('World'))

console.log(
    chalk.red(
        cowsay.say({
            text : ' ',
            e:"0o",
            T:""
        })
    )
)

//========================== DOTENV ==========================

const dontenv = require("dotenv")
dontenv.config();
//====================== READING ENV VARIABLES ==============

console.log(process.env.PORT)
console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASS)

//===================== IMPORT EXPORT MODULES IN NODEJS ==========

const car = require('./car.js')
console.log(car)

const myMath = require('./myMaths.js')

console.log(myMath.sum(4,5))

const {sum , sub , mul , div , PI} = require('./myMaths.js')

sum(4,4)
sub(8,4)
mul(8,4)
div(8,4)

console.log(PI)