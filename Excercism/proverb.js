const proverb = (...words) => {
  if (!words.length) return ""

  const lastArg = words[words.length - 1]
  const qualifier = typeof lastArg === "object" ? lastArg.qualifier : ""
  const items = typeof lastArg === "object" ? words.slice(0, -1) : words

  return items.length === 1
    ? `And all for the want of a ${items[0]}.`
    : [
        ...items.slice(0, -1).map((word, i) => `For want of a ${word} the ${items[i + 1]} was lost.`),
        `And all for the want of a ${qualifier ? qualifier + " " : ""}${items[0]}.`,
      ].join("\n")
}

// const proverb = (a) => {
//   console.log({
//     a,
//   })
//   if (!a || a == null || a == undefined) return ""

//   a = a.split(",")
//   if (a.length === 1) return `And all for the want of a ${a[0]}.`
//   else {
//     console.log({
//       a,
//     })
//     let str = ""
//     for (let i = 0; i < a.length - 1; i++) {
//       str += `For want of a ${a[i]} the ${a[i + 1]} was lost.`
//       str += `And all for the want of a ${typeof a[a.length - 1] == "object" ? a[a.length - 1] : ""} ${a[0]}.`
//     }
//     return str
//   }
// }
