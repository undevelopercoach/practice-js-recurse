// Multiply integers using recursion and addition - i.e. WITHOUT using either
// the multiplication operator or loops
// Hint: write your function to ignore any non-integer part of the parameters

const multiplyIntegers = (a, b) => {
  return 0
}

it('should correctly multiply two numbers together', () => {
  const result = multiplyIntegers(3, 4)
  expect(result).toEqual(12)
})

it('should return b if a is 1', () => {
  const result = multiplyIntegers(1, 4)
  expect(result).toEqual(4)
})

it('should return a if b is 1', () => {
  const result = multiplyIntegers(3, 1)
  expect(result).toEqual(3)
})

it('should return 0 if the first multiplicand is 0', () => {
  const result = multiplyIntegers(0, 4)
  expect(result).toEqual(0)
})

it('should return 0 if the second multiplicand is 0', () => {
  const result = multiplyIntegers(3, 0)
  expect(result).toEqual(0)
})
