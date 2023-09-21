// Answer 1
console.log('\nAnswer 1')

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1. Array Map (print odd number) like an array for each
oddNumber = []
myArr.map(item => { if (item % 2 == 1) { oddNumber.push(item) } })
console.log(`1. Odd Number is = ${oddNumber}`)

// 2. Find Index of Number 5, there at 4th index
const theIndex = myArr.findIndex(item => item == 5 )
console.log(`2. index of Number 5 is ${theIndex}`)

// 3. Array Reduce (accumulate the array)
const theAccumulation = myArr.reduce((previuusValue, currentValue)=> previuusValue + currentValue)
console.log(`3. Accumulation the value of myArr = [${myArr}] is ${theAccumulation}`)

// 4. Array Splice
myArr.splice(myArr.length, 0, 0)  // insert
console.log(`4a. insert 0 to the end of array, so the array is ${myArr}`)
myArr.splice(myArr.findIndex(item => item == 0), 1, 10) // replace
console.log(`4b. replace 0 to 10, so the array is ${myArr}`)

//5. Array Push
// Insert to last index of array
myArr.push(11)
console.log(`5. Insert 11 to the last index of array, so the array is ${myArr}`)

// 6. Array Pop
// Remove the last index of array
myArr.pop()
console.log(`6. Remove the last index of array, so the array is ${myArr}`)

// 7. Array Unshift
// Insert to the first index of array
myArr.unshift(0)
console.log(`7. Insert to the first index of array, so the array is ${myArr}`)

// 8. Array Shift
// Rremove first index of array
myArr.shift()
console.log(`8. Remove the first index of array, so the array is ${myArr}`)

// 9. Array Concat
// to combine between arrays
const appendArr = [11,12,13,14,15]
const newArr = myArr.concat(appendArr)
console.log(`9. Combining myArr with , so the array is ${newArr}`)

// 10. Array Include
// To Search is there a desired value
const isInclude = myArr.includes(10)
console.log(`10. the desire value is ${isInclude? 'available':'not available'} on myArr`)


// Answer 2
console.log('\nAnswer 2')

const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

const searchName = (keyword, count, callback) => {

    return callback(keyword, count)
}

const result = searchName("an", 3, (kword, cnt) => {

    return names.filter((person) => {

        return person.toLowerCase().includes(kword.toLowerCase())

    }).slice(0, cnt)

})

console.log(result)


// Answer 3
console.log('\nAnswer 3')

const App = {
    arrayData: [],
    arange: function (firstNum, lastNum) {

        if (this.arrayData.length < 5) {
            return "The array data should more than 5"
        }

        if (firstNum > lastNum) {
            return "First number Should less than last number"
        }

        const arr = this.arrayData.filter((number) => {
            // Betweeen
            return number > firstNum && number < lastNum
        }).sort((a, b) => {
            return a - b
        })

        if (arr.length == 0) {
            return "Number Not Found"
        }

        return arr
    }
}

// The array data should more than 5
const wrongData = App
wrongData.arrayData = [5, 8, 100]
console.log(wrongData.arange(1,10))

const goodData = App
goodData.arrayData = [5, 8, 20, 15, 29, 32, 34, 28, 25, 11, 13, 50, 100]

// First number Should less than last number
console.log(goodData.arange(10, 5))

// [ 5, 8, 11, 13, 15, 20 ]
console.log(goodData.arange(5, 20))

// Number Not Found
console.log(goodData.arange(101, 200))