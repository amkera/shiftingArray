function shifting(string, shiftArray) {

    let letters = string.split("") //[a, b, c, d, e, f, g]

    let finalArray = []

    for (let i = 0; i < shiftArray.length; i++) {

        let shiftDirection = shiftArray[i][0]
        let shiftAmount = shiftArray[i][1]

        if (shiftDirection > 1) {return "Invalid input"}

        if (shiftDirection === 0) {
            let removedLetters = letters.splice(0, shiftAmount)
            letters = letters.concat(removedLetters)


        } else if (shiftDirection === 1) {
            let removedLetters = letters.splice(-shiftAmount)
            //get the last letters
            letters = removedLetters.concat(letters)

        }
    }
    return letters.join("")
}

shifting("abcdefg", [[1,1],[1,1],[0,2],[1,3]])
