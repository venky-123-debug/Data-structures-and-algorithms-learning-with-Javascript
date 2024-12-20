const linearSearch = (a, t) => {
  try {
    for (let i = 0; i < a.length; i++) {
      if (a[i] == t) return i
      else return -1
    }
  } catch (error) {
    console.error(error)
  }
}
