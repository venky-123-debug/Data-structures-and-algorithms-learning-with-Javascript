const selectionSort = (arr) => {
  try {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      if (minIndex != i) {
        ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      }
    }
    return arr
  } catch (error) {
    console.error(error)
  }
}

let arr = [64, 34, 25, 12, 22, 11, 90]
console.log(selectionSort(arr))
