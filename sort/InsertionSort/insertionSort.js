/**
 * Sorts an array of numbers in ascending order using Insertion Sort.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const insertionSort = (arr) => {
  try {
    // Iterate over each element in the array, starting from index 1
    for (let i = 1; i < arr.length; i++) {
      // Shift elements to the right until the current element is in the correct position
      while (i > 0 && arr[i] < arr[i - 1]) {
        // Swap the current element with the previous one
        ;[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
        i-- // Move left in the array
      }
    }

    return arr // Return the sorted array
  } catch (error) {
    console.error(error) // Log errors if any occur
  }
}

// Example usage:
let arr = [5, 3, 8, 6, 2]
console.log(insertionSort(arr)) // Expected output: [2, 3, 5, 6, 8]
