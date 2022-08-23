// Binary search finds the position of a given sought value in an array.
// The array must be sorted in order for binary search to work.
// It works by progressively splitting the array into halves until the value is found.
// Implement binary search using recursion.
// Your search should return as soon as it finds the sought value; and return -1 if it can't find the value.

const findPositionOfValue = (arr, soughtValue) => {
  return -1
}

it('finds a value which is first in a short array', () => {
  const arr = [1, 4, 9]
  const soughtValue = 1
  const result = findPositionOfValue(arr, soughtValue)
  expect(result).toEqual(0)
})

it('finds a value which is second in a short array', () => {
  const arr = [1, 4, 9]
  const soughtValue = 4
  const result = findPositionOfValue(arr, soughtValue)
  expect(result).toEqual(1)
})

it('finds a value which is third in a short array', () => {
  const arr = [1, 4, 9]
  const soughtValue = 9
  const result = findPositionOfValue(arr, soughtValue)
  expect(result).toEqual(2)
})

it('returns -1 if it can\'t find the value', () => {
  const arr = [1, 4, 9]
  const soughtValue = 13
  const result = findPositionOfValue(arr, soughtValue)
  expect(result).toEqual(-1)
})

it('finds the value in a long array with repeated values', () => {
  const arr = [1, 1, 1, 3, 3, 5, 6, 7, 9, 9, 13, 13, 13, 13, 13, 13, 13, 13, 14, 16, 17, 19, 20]
  const soughtValue = 13
  const result = findPositionOfValue(arr, soughtValue)
  expect(result).toEqual(10)
})

it('returns -1 if the array is empty', () => {
  const arr = []
  const soughtValue = 13
  const result = findPositionOfValue(arr, soughtValue)
  expect(result).toBe(-1)
})
