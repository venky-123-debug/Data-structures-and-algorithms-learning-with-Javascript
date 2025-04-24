// Finding Two People Whose Ages Sum to a Given Number
// Imagine you're matching two people for an activity, and their combined age should be exactly 50.

const findAgePair = (ages, targetAge) => {
  ages.sort((a, b) => a - b)
  let left = 0
  let right = ages.length - 1

  while (left < right) {
    let sum = ages[left] + ages[right]
    if (sum === targetAge) {
      return [ages[left], ages[right]]
    } else if (sum < targetAge) {
      left++
    } else {
      right--
    }
  }
  return null
}

console.log(findAgePair([22, 28, 19, 31, 21], 50)) // Output: [19, 31]
