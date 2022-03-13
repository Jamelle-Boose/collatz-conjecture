export const steps = number => {
  let step = []
  step.push(number)

  if (step[0] <= 0) {
    throw new Error("Only positive numbers are allowed")
  }

  while (step[step.length - 1] !== 1) {
    if (step[step.length - 1] % 2 === 0) {
      step.push(step[step.length - 1] / 2)
    } else {
      step.push(3 * step[step.length - 1] + 1)
    }
  }

  return step.length - 1
}

// export const steps = (n, count = 0) => {
//   if (n <= 0) throw "Only positive numbers are allowed"
//   if (n === 1) return count
//   return steps(n % 2 === 0 ? n / 2 : n * 3 + 1, count + 1)
// }
