function quickSelect(arr, k) {
  function partition(left, right, pivotIndex) {
    const pivot = arr[pivotIndex]
    ;[arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]
    let storeIndex = left

    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        ;[arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]]
        storeIndex++
      }
    }

    ;[arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]]
    return storeIndex
  }

  function select(left, right, kSmallest) {
    if (left === right) return arr[left]
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
    const pivotFinalIndex = partition(left, right, pivotIndex)

    if (kSmallest === pivotFinalIndex) {
      return arr[kSmallest]
    } else if (kSmallest < pivotFinalIndex) {
      return select(left, pivotFinalIndex - 1, kSmallest)
    } else {
      return select(pivotFinalIndex + 1, right, kSmallest)
    }
  }

  if (k < 1 || k > arr.length) return null
  return select(0, arr.length - 1, k - 1)
}
