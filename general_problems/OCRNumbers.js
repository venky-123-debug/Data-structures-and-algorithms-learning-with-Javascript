let OCRDigits = {
  " _ | ||_|   ": "0",
  "     |  |   ": "1",
  " _  _||_    ": "2",
  " _  _| _|   ": "3",
  "   |_|  |   ": "4",
  " _ |_  _|   ": "5",
  " _ |_ |_|   ": "6",
  " _   |  |   ": "7",
  " _ |_||_|   ": "8",
  " _ |_| _|   ": "9",
}
const convert = (string) => {
  console.log({ string })
  let splitString = string.split("\n")
  console.log({ splitString })
  let columns = splitString[0].length / 3
  let rows = splitString.length / 4
  let result = []
  for (let i = 0; i < rows; i++) {
    let numberGroup = ""
    for (let j = 0; j < columns; j++) {
      let digit =
        splitString[i * 4 + 0].substr(j * 3, 3) +
        splitString[i * 4 + 1].substr(j * 3, 3) +
        splitString[i * 4 + 2].substr(j * 3, 3) +
        splitString[i * 4 + 3].substr(j * 3, 3)
      numberGroup += numberFromOcr(digit)
    }
    result.push(numberGroup)
  }
  return result.join(",")
}

function numberFromOcr(stringDigit) {
  return OCRDigits[stringDigit] || "?"
}
