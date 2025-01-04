const generateTrees = function (n) {
  if (n === 0) return []

  const generate = (start, end) => {
    let result = []
    if (start > end) {
      result.push(null)
      return result
    }

    for (let i = start; i <= end; i++) {
      let leftSubtrees = generate(start, i - 1)
      let rightSubtrees = generate(i + 1, end)
      for (let left of leftSubtrees) {
        for (let right of rightSubtrees) {
          let root = { val: i, left: left, right: right }
          result.push(root)
        }
      }
    }

    return result
  }

  return generate(1, n)
}
