const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

let inventors1 = [];
inventors1 = inventors.filter((name) => name.charAt(0) == 'A')
console.log('filter name start charAt A:', inventors1)

let inventors2 = [];
inventors2 = inventors.filter((name) => name.includes('n'))
console.log('filter name inclue n:', inventors2)

let inventors3 = [];
let sameChart = function(character) {
    for (let i = 0; i < character.length; i++) {
        if (character[i] == character[i + 1]) {
            return true
        }
    }
}

inventors3 = inventors.filter(sameChart)
console.log('filter name has letter twice:', inventors3)


let oddNumbers = [];
oddNumbers = numbers.filter((num) => num % 2 == 1)
console.log('filter odd number:', oddNumbers)

let twoDigits = []
twoDigits = numbers.filter((number) => number > 10 && number < 100)
console.log('array have two digit:', twoDigits)

//Map 1
let firtsName = [];
firtsName = inventors.map((name) => name.substring(0, name.indexOf(' ')))
console.log('map first name:', firtsName)

//Map 2
let lenghtOfName = [];
lenghtOfName = inventors.map((name) => name.length)
console.log('length of each name:', lenghtOfName)

//Map3
let nameUppercase = [];
nameUppercase = inventors.map((name) => name.toUpperCase())
console.log('name uppercase:', nameUppercase)

//Map 4
let isUpperCase = (charUpperCase) => {
    for (let i = 0; i < charUpperCase.length; i++) {
        if (charUpperCase[i] == charUpperCase[i].toUpperCase() && charUpperCase[i] != ' ' && charUpperCase[i] != '.') {
            return charUpperCase[i]
        }
    }
}

let initNameUpperCase = [];
initNameUpperCase = inventors.map((name) => name.split('').filter(isUpperCase).join('.'))
console.log('initial name uppercase:', initNameUpperCase)

//Map 5
let time100 = [];
time100 = numbers.map((num) => num * 100)
console.log('multiplied 100:', time100)

//Map 6
let pow = [];
for (let i = 1; i < 6; i++) {
    pow.push(Math.pow(2, i))
}
console.log(pow)

//Sort 1
let ascendingName = [];
ascendingName = inventors.sort()
console.log('ascending name A-Z:', ascendingName)

//Sort 2
let decendingName = [];
decendingName = inventors.sort((a, b) => a < b ? 1 : -1)

console.log('decending name:', decendingName)

//Sort 3
let shortestName = []
shortestName = inventors.sort((a, b) => a.length < b.length ? -1 : 1)
console.log('shortest name:', shortestName)

//Sort 4
let longestName = []
longestName = inventors.sort((a, b) => a.length < b.length ? 1 : -1)
console.log('shortest name:', longestName)

//Reduce 1
let sumNumbers
sumNumbers = numbers.reduce((total, num) => {
    total += num
    return total
})
console.log('sum numbers:', sumNumbers)

//Reduce 2
let sumOfEven
sumOfEven = numbers.filter((even) => even % 2 == 0).reduce((total, num) => {
    total += num
    return total
})
console.log('sum of even numbers:', sumOfEven)

//Reduce 3
let strFirstName
strFirstName = inventors.map((name) => name.substring(0, name.indexOf(' '))).reduce((total, num) => {
    total += num
    return total
})

console.log('string of first name:', strFirstName)

//Every 1
let isHasY
isHasY = inventors.some((name) => name.includes('y'))
console.log('any name of inventors has y:', isHasY)

//Every 2
let isHasE
isHasE = inventors.every((name) => name.includes('e'))
console.log('every name of inventors has e:', isHasE)

//Every 3
let isNameLonger4
isNameLonger4 = inventors.map((name) => name.substring(0, name.indexOf(' '))).every((name) => name.length > 4)
console.log('every name of inventors longer 4 character:', isNameLonger4)

// Find 1
let middleName
middleName = inventors.map((name) => name.split(' ')).find((name) => name.length > 2).join(' ')
console.log('middle name:', middleName)

//FindIndex 2
let index
index = inventors.map((name) => name.split(' ')).findIndex((name) => name.length > 2)
inventors.splice(index, 1)
console.log('array without middle name:', inventors)

//Find 3
let num = numbers.find((num) => num % 7 == 0)
console.log(num)

//FindIndex 4
let index = numbers.findIndex((num) => num % 7 == 0)
numbers.splice(index, 1)
console.log(numbers)