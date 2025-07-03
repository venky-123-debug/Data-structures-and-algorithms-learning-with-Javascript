// Removing Duplicates from a Sorted Array
// Like cleaning up a sorted customer email list.

const removeDuplicates = (arr) => {
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
      console.log(arr)
    }
  }
  console.log({ i })
  return arr.slice(0, i + 1)
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4])) // Output: [1, 2, 3, 4]
