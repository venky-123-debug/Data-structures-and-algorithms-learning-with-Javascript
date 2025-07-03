// Function to return the maximum water that can be stored
const maxWater = (arr) => {
  let res = 0

  // For every element of the array
  for (let i = 1; i < arr.length - 1; i++) {
    // Find the maximum element on its left
    let left = arr[i]
    for (let j = 0; j < i; j++) left = Math.max(left, arr[j])

    // Find the maximum element on its right
    let right = arr[i]
    for (let j = i + 1; j < arr.length; j++) right = Math.max(right, arr[j])

    // Update the maximum water
    res += Math.min(left, right) - arr[i]
  }

  return res
}

// Driver code
let arr = [2, 1, 5, 3, 1, 0, 4]
console.log(maxWater(arr))
