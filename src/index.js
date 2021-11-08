var randomNumber = require('random-number');
var options = {
    min:-1000,
    max:1000,
    integer: true
};

module.exports = {
    helloWorld: "Hello World",
    luckyNumber: randomNumber(options),
    luckyNumberGenerator: () => {return randomNumber(options)},
    mysteriousNumber: (value) => {
        if (typeof value === 'string'){
            return value.length;
        }
        else if (typeof value ==='number'){
            return value;
        }
        return -1;
    }
};