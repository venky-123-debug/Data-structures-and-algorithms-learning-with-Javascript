const spiralMatrix = (n) => {
  let r = Array.from({ length: n }, () => Array(n).fill(0))
  let val = 1
  let sR = 0,
    eR = n - 1
  let sC = 0,
    eC = n - 1

  while (sR <= eR && sC <= eC) {
    // left to right
    for (let col = sC; col <= eC; col++) {
      r[sR][col] = val++
    }
    sR++
    // top to bottom
    for (let row = sR; row <= eR; row++) {
      r[row][eC] = val++
    }
    eC--
    console.log({ eC })
    // right to left
    for (let col = eC; col >= sC; col--) {
      r[eR][col] = val++
    }
    eR--
    // bottom to top
    for (let row = eR; row >= sR; row--) {
      r[row][sC] = val++
    }
    sC++
  }

  return r
}

console.log(spiralMatrix(2))
