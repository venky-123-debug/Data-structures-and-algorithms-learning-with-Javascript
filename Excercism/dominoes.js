const left = (d) => d[0]
const right = (d) => d[1]
const swap = (d) => [d[1], d[0]]

const remainder = (dominoes, index) => {
  let res = [...dominoes]
  res.splice(index, 1)
  return res
}

const buildChain = (dominoes, leftChk, rightChk) => {
  if (dominoes.length == 1) {
    let d = dominoes[0]
    if (left(d) == leftChk && right(d) == rightChk) return [d]
    if (left(d) == rightChk && right(d) == leftChk) return [swap(d)]
    return null
  }
  for (let [i, d] of dominoes.entries()) {
    let rest = remainder(dominoes, i)
    if (left(d) == leftChk) {
      let subchain = buildChain(rest, right(d), rightChk)
      if (subchain) return [d].concat(subchain)
    }
    if (right(d) == leftChk) {
      let subchain = buildChain(rest, left(d), rightChk)
      if (subchain) return [swap(d)].concat(subchain)
    }
  }
  return null
}

export const chain = (dominoes) => {
  if (dominoes.length == 0) return []
  let d = dominoes[0]
  if (dominoes.length == 1) return left(d) == right(d) ? dominoes : null
  let rest = remainder(dominoes, 0)
  let subchain = buildChain(rest, right(d), left(d))
  return subchain ? [d].concat(subchain) : null
}
