
// Input: $str = "xyz", $shifts = [[0,1],[1,2]]
//[direction, number of spaces]
//if the direction is 0, remove first x letters and append it to the end
//if the direction is 1, remove the last x letters and append ir
// Output: "zxy"

//push (add to end), unshift (add to beginning)

//splice returns the removed items in an array


// function shifting(string, shiftArray) {




//     for (let i = 0; i < shiftArray.length; i++) {


//         let stringCopy = string.slice()
//         let shiftDirection = shiftArray[i][0]
//         let shiftAmount = shiftArray[i][1]

//         if (shiftDirection > 1) {return "Invalid input"}
//         else if (shiftDirection === 0) {


//             let leftOverLetters = stringCopy.substring(0, shiftAmount)
//             let removedLetters = stringCopy.substring(shiftAmount)

//             let finalString = removedLetters + leftOverLetters
//             console.log(finalString)
//         }

//         if (shiftDirection === 1) {


//             let leftOverLetters = stringCopy.substring(0, stringCopy.length - shiftAmount)
//             let removedLetters = stringCopy.substring(stringCopy.length - shiftAmount)

//             let finalString = removedLetters + leftOverLetters
//             console.log(finalString)

//         }

//     }
// }

// shifting("abcdefg", [[1,1],[1,1],[0,2],[1,3]])
