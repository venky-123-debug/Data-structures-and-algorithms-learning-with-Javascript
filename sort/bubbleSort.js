const bubbleSort = (arr) => {
  try {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr
  } catch (error) {
    console.error(error)
  }
}
let arr = [64, 34, 25, 12, 22, 11, 90]
console.log(bubbleSort(arr))
