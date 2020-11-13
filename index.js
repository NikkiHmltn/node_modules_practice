const {favFoods} = require("./nodeModule")
const chalk = require('chalk')
const beep = require('beepbeep')
const classNames = require('classnames')

function printFoods(foods) {
    for(let i = 0; i < foods.length; i++) {
        foods[i]
        return foods;
    }
}
console.log(printFoods(favFoods))


console.log(chalk.red(printFoods(favFoods[0])))
console.log(chalk.yellow(printFoods(favFoods[1])))
console.log(chalk.cyan(printFoods(favFoods[2])))
console.log(chalk.magenta(printFoods(favFoods[3])))

beep(1)
beep([100, 1000, 2000])

let x = 4
if (x > 0) {
    console.log(classNames('hot', 'dog'))
}

