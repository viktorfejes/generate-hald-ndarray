const ndarray = require('ndarray')

function toFixedNumber(num, digits, base){
    var pow = Math.pow(base||10, digits);
    return Math.round(num*pow) / pow;
}

function generateHaldData(size) {
    const cubeSize = Math.sqrt(size)
    let data = []

    let blue = 0
    while (blue < size) {
        let green = 0
        while (green < size) {
            let red = 0
            while (red < size) {
                data.push(toFixedNumber(red / (cubeSize - 1), 6))
                data.push(toFixedNumber(green / (cubeSize - 1), 6))
                data.push(toFixedNumber(blue / (cubeSize - 1), 6))

                red++
            }
            green++
        }
        blue++
    }

    out = ndarray(data, [size, size, size, 3])

    return out
}

module.exports = generateHaldData