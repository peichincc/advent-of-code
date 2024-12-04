const fs = require('fs');

// read the file
const textFile = fs.readFileSync('day1-input.txt', 'utf8');

// split the input file into an array
let arr = []
textFile.split('\n').forEach((line) => {
  arr.push(line)
})

const makeArray = (arr) => {
    return arr.map((line) => {
        return line.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    })
}


// organize the array into left and right
let left = []; 
let right = [];

const makeNewArray = (arr) => {arr.forEach((line) => {
    left.push(Number(line[0]))
    right.push(Number(line[1]))
})}

makeNewArray(makeArray(arr))


// sort the left and right arrays
sortedLeft = left.sort((a,b)=> a-b),
sortedRight = right.sort((a,b)=> a-b)

// deduct the sorted left from the sorted right array with absolute value
let sortedArr = sortedLeft.map(function(item, index) {
  return Math.abs(item - sortedRight[index]);
})

// calculate the sum of the sorted array
const sum = sortedArr.reduce((partialSum, a) => partialSum + a, 0);

console.log(sum);


// part 2

