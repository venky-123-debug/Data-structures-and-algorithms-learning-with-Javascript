const convert = (input) => {
  let digitMap = {
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
  console.log({ input })
  // Process multiple lines if necessary
  let lines = input.split("\n\n").map((block) => processBlock(block, digitMap))

  return lines.join(",")
}

// Validate the size of the input
function validateInput(input) {
  let lines = input.split("\n")
  return lines.length % 4 === 0 && lines.every((line) => line.length % 3 === 0)
}

// Process a block of numbers
function processBlock(block, digitMap) {
  let rows = block.split("\n")
  let numDigits = rows[0].length / 3
  console.log({ numDigits })

  let digits = []
  for (let i = 0; i < numDigits; i++) {
    let digitStr =
      rows[0].slice(i * 3, i * 3 + 3) +
      rows[1].slice(i * 3, i * 3 + 3) +
      rows[2].slice(i * 3, i * 3 + 3) +
      rows[3].slice(i * 3, i * 3 + 3)
    digits.push(digitMap[digitStr] || "?")
  }
  console.log(digits.join(""))

  return digits.join("")
}

let input = `
 _ 
| |
|_|
`
console.log(convert(input))
