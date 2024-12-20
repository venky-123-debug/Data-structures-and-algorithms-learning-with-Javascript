// Iterative Binary Search Algorithm

const binarySearch = (arr, n) => {
  try {
    let l = 0
    let r = arr.length - 1
    let mid = l + Math.floor((r - l) / 2)
    while (r >= l) {
      if (arr[mid] == n) return mid
      if (arr[mid] > n) r = mid - 1
      else l = mid + 1
    }
  } catch (error) {
    console.error(error)
  }
}

// recursive approach

const binaryRec = (l, r, arr, n) => {
  try {
    if (r > l) {
      let mid = l + Math.floor(r - n) / 2

      if (arr[mid] == n) return mid
      else if (arr[mid] > n) binaryRec(l, mid - 1, arr, n)
      else binaryRec(l, mid + 1, arr, n)
    }
  } catch (error) {
    console.error(error)
  }
}
