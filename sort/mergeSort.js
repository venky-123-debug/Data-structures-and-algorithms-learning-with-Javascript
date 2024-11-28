/**
 * Sorts an array of numbers in ascending order using the merge sort algorithm.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} - A new sorted array.
 */
const mergeSort = (arr) => {
  try {
    // Base case: If array has 1 or fewer elements, it's already sorted.
    if (arr.length <= 1) return arr

    // Calculate the middle index of the array
    let mid = Math.floor(arr.length / 2)

    // Divide the array into left and right halves
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right))
  } catch (error) {
    // Log any errors encountered during sorting
    console.error(error)
  }
}

/**
 * Merges two sorted arrays into a single sorted array.
 * @param {number[]} left - The left half of the split array, sorted.
 * @param {number[]} right - The right half of the split array, sorted.
 * @returns {number[]} - A new array with elements from both halves in sorted order.
 */
const merge = (left, right) => {
  try {
    // Initialize an empty array to hold sorted elements
    let sortedArray = []

    // Compare elements from left and right arrays, one by one
    while (left.length && right.length) {
      // If the first element of left is smaller, push it to sortedArray
      if (left[0] < right[0]) {
        sortedArray.push(left.shift())
      } else {
        // Otherwise, push the first element of right
        sortedArray.push(right.shift())
      }
      console.log({ sortedArray })
    }

    // Concatenate remaining elements of left and right arrays to sortedArray
    return [...sortedArray, ...left, ...right]
  } catch (error) {
    // Log any errors encountered during merging
    console.error(error)
  }
}

let arr = [64, 34, 25, 12, 22, 11, 90]

// Output the sorted array to the console
console.log(mergeSort(arr))
