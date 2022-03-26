exports.steps = num => {
  if (num <= 0) throw new Error("Only positive numbers are allowed")

  if (num === 1) return 0

  if (num % 2 === 0) {
    return 1 + exports.steps(num / 2)
  }

  return 1 + exports.steps(3 * num + 1)
}
